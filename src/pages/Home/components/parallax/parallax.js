import "./parallax.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionParallax() {
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();
  const image4 = useRef();
  const textBox = useRef();

  useEffect(() => {
    gsap.fromTo(
      image1.current,
      { y: "60%" },
      {
        duration: 2,
        y: "-60%",
        ease: "power3.easeIn",
        scrollTrigger: {
          trigger: image1.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      textBox.current,
      { y: "80%" },
      {
        duration: 2,
        y: "-80%",
        ease: "power3.easeIn",
        scrollTrigger: {
          trigger: textBox.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      image2.current,
      { y: "80%" },
      {
        duration: 2,
        y: "-80%",
        ease: "power3.easeIn",
        scrollTrigger: {
          trigger: image2.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      image3.current,
      { y: "75%" },
      {
        y: "-75%",
        duration: 2,
        ease: "power3.easeIn",
        scrollTrigger: {
          trigger: image3.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      image4.current,
      { y: "30%" },
      {
        duration: 2,
        y: "-30%",
        ease: "power3.easeIn",
        scrollTrigger: {
          trigger: image4.current,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section--parallax">
      <div ref={textBox} className="parallax--text__box">
        <p className="text__box__main--para">
          treat yourself with someone special
        </p>
        <h3 className="text__box__main--heading">
          Animals have come to mean so much in our lives.
        </h3>
        <p className="text__box__secondary--para">
          My favorite type of pet has always been a dog. They’re loyal, kind,
          and offer endless affection. My friend says, ‘The more people I meet,
          the more I like my dog.’ Funny thought.
        </p>
      </div>
      <img
        ref={image1}
        className="img--parallax--1"
        src="https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo="
      />
      <img
        ref={image2}
        className="img--parallax--2"
        src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <img
        ref={image3}
        className="img--parallax--3"
        src="https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <img
        ref={image4}
        className="img--parallax--4"
        src="https://media.istockphoto.com/photos/dog-and-cat-as-best-friends-looking-out-the-window-together-picture-id1364253107?b=1&k=20&m=1364253107&s=170667a&w=0&h=t6ACgO5qxJqjS_VFMqlMBweE5ha73Lbbk2CTRvSTL38="
      />
    </section>
  );
}

export default SectionParallax;
