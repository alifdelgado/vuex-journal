export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis rem nam dignissimos velit, maiores officiis tempore culpa illo quisquam quas animi numquam esse eum iste laudantium ex commodi.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere deserunt eos quis dolores, id maiores autem consequatur est, iste rerum. Est iste et eveniet perspiciatis magni facilis. Optio, asperiores.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit consequatur sequi nam, repudiandae sint animi, aspernatur doloribus voluptas hic asperiores numquam fugiat quis aliquid tempore nobis autem possimus quo.",
      picture: null,
    },
  ],
});
