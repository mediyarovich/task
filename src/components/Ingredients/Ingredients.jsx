import React from "react";

const Ingredients = ({ meal }) => {
  return (
    <div>
      {meal === "манты" ? (
        <p>
          Рецептов приготовления плова очень-очень много! Я предлагаю рецепт,
          который очень любим в нашей семье. Так готовит плов мой папа. Плов
          получается ароматный, рассыпчатый, сочный. Я затрудняюсь сказать
          точно, сколько получается порций, но его получается много. Съедается
          он быстро. К плову можно подать овощной салат, или крупно нарезанные
          помидоры с луком.
        </p>
      ) : null}
      {meal === "лагман" ? (
        <p>
          Рецептов приготовления плова очень-очень много! Я предлагаю рецепт,
          который очень любим в нашей семье. Так готовит плов мой папа. Плов
          получается ароматный, рассыпчатый, сочный. Я затрудняюсь сказать
          точно, сколько получается порций, но его получается много. Съедается
          он быстро. К плову можно подать овощной салат, или крупно нарезанные
          помидоры с луком.
        </p>
      ) : null}
      {meal === "плов" ? (
        <p>
          Рецептов приготовления плова очень-очень много! Я предлагаю рецепт,
          который очень любим в нашей семье. Так готовит плов мой папа. Плов
          получается ароматный, рассыпчатый, сочный. Я затрудняюсь сказать
          точно, сколько получается порций, но его получается много. Съедается
          он быстро. К плову можно подать овощной салат, или крупно нарезанные
          помидоры с луком.
        </p>
      ) : null}
    </div>
  );
};

export default Ingredients;