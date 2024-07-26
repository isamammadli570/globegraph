import PageNav from "../../Components/PageNav";

function PageNotFound() {
  return (
    <>
    <PageNav/>
      <div className="absolute top-1/2 left-1/2 ">
        <h1 >Page not found :(</h1>
      </div>
    </>
  );
}

export default PageNotFound;
