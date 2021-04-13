import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <hi>UrlParameterです</hi>
      <p>パラメータは{id}です</p>
    </div>
  );
};
