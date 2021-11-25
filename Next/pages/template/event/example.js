import { useEffect, useState } from "react";

const IndexPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <div style={{ height: 4000 }}> {/* just added to make scrollbar available */}
      <div style={{ position: "fixed", top: 0 }}>
        {scrollY > 100
          ? "Scrolled more than 100px"
          : "Still somewhere near the top!"}
        <br></br>{scrollY > 200
          ? "Scrolled more than 200px too"
          : " "}
        <br></br>{scrollY > 300
          ? "Scrolled more than 300px too"
          : " "}
        <br></br>{scrollY > 400
          ? "Scrolled more than 400px too"
          : " "}
        <br></br>{scrollY > 500
          ? "Scrolled more than 500px too"
          : " "}
        <br></br>{scrollY > 600
          ? "Scrolled more than 600px too"
          : " "}
        <br></br>{scrollY > 700
          ? "Scrolled more than 700px too"
          : " "}
        <br></br>{scrollY > 800
          ? "Scrolled more than 800px too"
          : " "}
        <br></br>{scrollY > 900
          ? "Scrolled more than 900px too"
          : " "}
        <br></br>{scrollY > 1000
          ? "Scrolled more than 1000px too"
          : " "}
        <br></br>{scrollY > 1100
          ? "Scrolled more than 1100px too"
          : " "}
        <br></br>{scrollY > 1200
          ? "Scrolled more than 1200px too"
          : " "}
        <br></br>{scrollY > 1300
          ? "Scrolled more than 1300px too"
          : " "}
        <br></br>{scrollY > 1400
          ? "Scrolled more than 1400px too"
          : " "}
        <br></br>{scrollY > 1500
          ? "Scrolled more than 1500px too"
          : " "}
        <br></br>{scrollY > 1600
          ? "Scrolled more than 1600px too"
          : " "}
        <br></br>{scrollY > 1700
          ? "Scrolled more than 1700px too"
          : " "}
        <br></br>{scrollY > 1800
          ? "Scrolled more than 1800px too"
          : " "}
        <br></br>{scrollY > 1900
          ? "Scrolled more than 1900px too"
          : " "}
        <br></br>{scrollY > 2000
          ? "Scrolled more than 2000px too"
          : " "}
        <br></br>{scrollY > 2100
          ? "Scrolled more than 2100px too"
          : " "}
        <br></br>{scrollY > 2200
          ? "Scrolled more than 2200px too"
          : " "}
        <br></br>{scrollY > 2300
          ? "Scrolled more than 2300px too"
          : " "}
        <br></br>{scrollY > 2400
          ? "Scrolled more than 2400px too"
          : " "}
        <br></br>{scrollY > 2500
          ? "Scrolled more than 2500px too"
          : " "}
        <br></br>{scrollY > 2600
          ? "Scrolled more than 2600px too"
          : " "}
        <br></br>{scrollY > 2700
          ? "Scrolled more than 2700px too"
          : " "}
        <br></br>{scrollY > 2800
          ? "Scrolled more than 2800px too"
          : " "}
        <br></br>{scrollY > 2900
          ? "Scrolled more than 2900px too"
          : " "}
        <br></br>{scrollY > 3000
          ? "Scrolled more than 3000px too"
          : " "}
        <br></br>{scrollY > 3100
          ? "Scrolled more than 3100px too"
          : " "}
        <br></br>{scrollY > 3200
          ? "Scrolled more than 3200px too"
          : " "}
        <br></br>{scrollY > 3300
          ? "Scrolled more than 3300px too"
          : " "}
      </div>
      <div className="text-right w-72"><a href="../../" className="a2"><button>Back</button></a></div>
      
    </div>
  );
};

export default IndexPage;