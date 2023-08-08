import useConsumet from "@/hooks/useConsumet";

function Home() {
  const { data, loading, error } = useConsumet();

  if (loading) return <div>loading...</div>;
  else if (error) return <div>error...</div>;
  else {
    console.log(data);
    return (
      <div>
        <h1>Home</h1>
        <div>Data Fetched</div>
      </div>
    );
  }
}

export default Home;
