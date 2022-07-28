import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const ProductRating = ({
  rating,
  darkbg = false,
  readonly = true,
  large = false,
}) => {
  return (
    <Rating
      fullSymbol={<AiTwotoneStar color="#f5b74c" size={large ? 20 : 16} />}
      emptySymbol={
        <AiOutlineStar
          style={{
            background: darkbg ? "#000" : "#fff",
            fill: "orange",
          }}
          size={large ? 20 : 16}
        />
      }
      initialRating={rating}
      readonly={readonly}
    />
  );
};

export default ProductRating;
