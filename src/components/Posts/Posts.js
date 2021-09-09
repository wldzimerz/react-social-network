import s from "./Posts.module.css";
import Post from "./Post/Post.js";

const Posts = () => {
  return (
    <main className={s.container}>
      <div className={s.posts}>
        <Post
          groupname="LIFEHACKS"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium numquam ab dolores, culpa molestiae aliquam quos harum veniam.
          Eius perspiciatis ullam dolor ipsum, odio suscipit et explicabo quia dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          distinctio ad! Laudantium officia facere odio repellat fuga? Optio laboriosam modi provident libero saepe veritatis recusandae repellat
          tenetur illum vel esse distinctio at excepturi qui temporibus magnam sed, voluptates cum numquam quos a. Omnis, voluptatibus ad."
          postimage="https://img.gazeta.ru/files3/325/12273325/Depositphotos_147536235_xl-2015-pic905-895x505-92082.jpg"
        />
        <Post
          groupname="LEPRA"
          text="Lorem ipsum dolor sit, amet  adipisicing elit. Maiores accusantium numquam ab dolores, culpa molestiae aliquam quos harum veniam.
          Eius perspiciatis ullam dolor ipsum, odio suscipit et explicabo quia dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illum temporibus magnam sed, voluptates cum numquam quos a. Omnis, voluptatibus ad."
          postimage="https://a2goos.com/data_images/galleryes/dacia-sandero-stepway/dacia-sandero-stepway-11.jpg"
        />
        <Post
          groupname="PHOTO.RU"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium numquam ab dolores, culpa molestiae aliquam quos harum veniam.
          "
          postimage="https://live.staticflickr.com/4690/38621318665_7799a0f180_b.jpg"
        />
      </div>
    </main>
  );
};

export default Posts;
