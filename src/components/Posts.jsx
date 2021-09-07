import classes from "./Posts.module.css";

function Posts() {
  return (
    <main className={classes.container}>
      <div className={classes.posts}>
        <div className={classes.post}>
          <div className={classes.group}>
            <img
              src="https://lh3.googleusercontent.com/proxy/FEUxRgaexq21EDgdrglLf4GU0Ilmc2DMUl9a7OXN6u9DRIh4V5saoZa5KQQ7p58SMtVwiIJ9FoVmU2HCko3HLzKba9zs5XG6vc4XK83G1Qem6w"
              alt="groupphoto"
              className={classes.groupphoto}
            />
            <div className={classes.groupinfo}>
              <div className={classes.groupname}>LIFE HACKS</div>
              <div className={classes.posttime}>7 minutes ago</div>
            </div>
          </div>
          <div className={classes.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium numquam ab dolores, culpa molestiae aliquam quos harum
            veniam. Eius perspiciatis ullam dolor ipsum, odio suscipit et explicabo quia dolore. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nemo, distinctio ad! Laudantium officia facere odio repellat fuga? Optio laboriosam modi provident libero saepe veritatis recusandae
            repellat tenetur illum vel esse distinctio at excepturi qui temporibus magnam sed, voluptates cum numquam quos a. Omnis, voluptatibus ad.
            &nbsp;
            <span className={classes.more}>READ MORE</span>
            <img src="https://a2goos.com/data_images/models/audi-a4-b6/audi-a4-b6-09.jpg" alt="postimage" className={classes.postimage} />
          </div>
          <div className={classes.activities}>
            <img src="https://svgsilh.com/svg_v2/24037.svg" alt="like" className={classes.icon} />
            <p>268</p>
            <img src="https://image.flaticon.com/icons/png/512/134/134718.png" alt="comment" className={classes.icon} />
            <p>30</p>
            <img src="https://image.flaticon.com/icons/png/512/159/159604.png" alt="watchers" className={classes.icon} />
            <p>2.2k</p>
          </div>
        </div>
        <div className={classes.post}>
          <div className={classes.group}>
            <img
              src="https://st.depositphotos.com/1139282/3893/i/600/depositphotos_38930565-stock-photo-abstract-background-with-rainbow-colorful.jpg"
              alt="groupphoto"
              className={classes.groupphoto}
            />
            <div className={classes.groupinfo}>
              <div className={classes.groupname}>LIFE HACKS</div>
              <div className={classes.posttime}>7 minutes ago</div>
            </div>
          </div>
          <div className={classes.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium numquam ab dolores, culpa molestiae aliquam quos harum
            veniam. Eius perspiciatis ullam dolor ipsum, odio suscipit et explicabo quia dolore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas minus aut harum commodi velit nobis ex veniam, asperiores esse modi.&nbsp;
            <span className={classes.more}>READ MORE</span>
            <img
              src="https://a2goos.com/data_images/galleryes/dacia-sandero-stepway/dacia-sandero-stepway-11.jpg"
              alt="postimage"
              className={classes.postimage}
            />
          </div>
          <div className={classes.activities}>
            <img src="https://svgsilh.com/svg_v2/24037.svg" alt="like" className={classes.icon} />
            <p>268</p>
            <img src="https://image.flaticon.com/icons/png/512/134/134718.png" alt="comment" className={classes.icon} />
            <p>30</p>
            <img src="https://image.flaticon.com/icons/png/512/159/159604.png" alt="watchers" className={classes.icon} />
            <p>2.2k</p>
          </div>
        </div>
        <div className={classes.post}>
          <div className={classes.group}>
            <img src="https://i.pinimg.com/originals/58/f1/19/58f119ba1015a04f4fae147ccf34b55f.jpg" alt="groupphoto" className={classes.groupphoto} />
            <div className={classes.groupinfo}>
              <div className={classes.groupname}>LIFE HACKS</div>
              <div className={classes.posttime}>7 minutes ago</div>
            </div>
          </div>
          <div className={classes.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium numquam ab dolores, culpa molestiae aliquam quos harum
            veniam. Eius perspiciatis ullam dolor ipsum, odio suscipit et explicabo quia dolore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reiciendis veritatis saepe minima aliquam doloremque? Fuga sunt amet dicta, dolor, error distinctio aut minima voluptatem ratione
            eaque totam, placeat laudantium possimus.&nbsp;
            <span className={classes.more}>READ MORE</span>
            <img src="https://live.staticflickr.com/4690/38621318665_7799a0f180_b.jpg" alt="postimage" className={classes.postimage} />
          </div>
          <div className={classes.activities}>
            <img src="https://svgsilh.com/svg_v2/24037.svg" alt="like" className={classes.icon} />
            <p>268</p>
            <img src="https://image.flaticon.com/icons/png/512/134/134718.png" alt="comment" className={classes.icon} />
            <p>30</p>
            <img src="https://image.flaticon.com/icons/png/512/159/159604.png" alt="watchers" className={classes.icon} />
            <p>2.2k</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Posts;
