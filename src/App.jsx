import { useEffect, useState } from "react";
import axios from 'axios';
import Image_holder from './components/image_holder';
import Pages_count from './components/pages_count';
import Loading from './components/loading';
import { Navbar, Footer } from "./components/navbar";


const App = () => {
  const [allimage, setAllimage] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const categories = [
    "car",
    "nature",
    "technology",
    "anime",
    "gaming",
    "food",
    "space",
    "travel",
    "fitness",
    "architecture"
  ]

  const next_page = () => {
    setIndex(index + 1);
  }
  const prev_page = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  }
  useEffect(() => {
    async function getImages() {
      setLoading(true);
      const api_key = import.meta.env.VITE_API_KEY;
      const randomQuery = categories[Math.floor(Math.random() * categories.length)];
      try {
        const responce = await axios.get("https://api.unsplash.com/search/photos",
          {
            params: {
              query: randomQuery,
              per_page: 22,
              page: index
            },


            headers: {
              Authorization: `Client-ID ${api_key}`
            }
          }
        )
        // console.log((responce.data.results)[0]);
        setAllimage(responce.data.results);

      } catch (error) {
        console.log("somthing is wrong", error);
      }
      setLoading(false)
    }
    getImages();
  }, [index])
  return (
    <div>
      <Navbar />
      {
        loading
          ?
          <Loading />
          :
          <div className="new-all-image columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-4 m-7">
            {
              allimage.map((allimages) => {
                return (
                  <Image_holder img={allimages} key={allimages.id} />
                )
              })
            }
          </div>
      }
      <div className="page-i-nations flex justify-center items-center p-20 mt-7">
        <Pages_count page_no={index} next_page={next_page} prev_page={prev_page} />
      </div>

      <Footer />
    </div>
  )
}

export default App;
