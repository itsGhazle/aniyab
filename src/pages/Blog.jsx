/* eslint-disable react/prop-types */

import LatestNews from "../UI/LatestNews";
import News from "../UI/News";
import Pagination from "../UI/Pagination";

function Blog({ image, title, description, date }) {
  return (
    <>
      <LatestNews date={date} />
      <div className="flex flex-row flex-wrap">
        <News image={image} title={title} description={description} />
      </div>
      <Pagination count={15} />
    </>
  );
}

export default Blog;
