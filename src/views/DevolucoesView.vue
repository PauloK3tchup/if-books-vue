<script setup>
import { useBooksStore } from '@/stores/books'
import { useCartStore } from '@/stores/cart'

const booksStore = useBooksStore()
const cartStore = useCartStore()
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <p>
          Esta é a página de devoluções, onde você pode encontrar informações sobre como devolver um produto adquirido em nossa loja.
        </p>
      </div>
    </section>
  </main>
</template>
<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 9vw;
  border-bottom: 2px solid #27ae6099;

  & h2 {
    color: #382c2c;
    font-size: 3rem;
    font-weight: 700;
  }

  & .hero-content {
    width: 50%;
    padding-right: 20px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    & h3.outlined {
      background-color: transparent;
      color: #27ae60;
      border: 2px solid #27ae60;
      padding: 15px 20px;
      border-radius: 5px;
      font-size: 1rem;
    }

    & button {
      margin-top: 20px;
    }

    p {
      width: 70%;
    }
  }

  & .hero-image {
    width: 50%;
    text-align: right;
    padding-right: 4vw;

    & img {
      max-width: 100%;
      height: auto;
    }
  }
}

button {
  background-color: #27ae60;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  gap: 20px;
  display: flex;
  justify-content: center;

  &.outlined {
    background-color: transparent;
    color: #27ae60;
    border: 2px solid #27ae60;
  }

  &.plain {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
  }
}

.featured {
  display: flex;
  padding: 3vh 8vw;
  border-bottom: 2px solid #27ae6099;

  & div {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 10px;

    & span {
      font-size: 2rem;
    }

    & h2 {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  & article:nth-child(2) {
    border-left: 1px solid #27ae6099;
    border-right: 1px solid #27ae6099;
  }
}

.books ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5vh 8vw;

  & .book {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: calc(100% / 4 - 42px);
    margin: 20px;

    & h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    & .book-author {
      font-size: 1rem;
    }

    & .book-price {
      font-size: 1.2rem;
      font-weight: 700;
    }

    & .price-and-like {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      & .mdi-heart-outline {
        font-size: 1.3rem;
        color: #27ae60;
      }
    }
  }
}
</style>
