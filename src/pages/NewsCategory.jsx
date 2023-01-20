import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import { useFetch } from "../utils/hooks/useFetch";

function NewsCategory() {
  const { categoryId } = useParams();

  const newsCategoryEndpoint = getNewsCategoryEndpoint(categoryId);
  const news = useFetch(newsCategoryEndpoint);

  console.log(news);

  return (
    <Layout>
      <Container>
        <h1>Numele categoriei</h1>
        <p>Parametrul venit din router: {categoryId}</p>
      </Container>
    </Layout>
  );
}

export default NewsCategory;
