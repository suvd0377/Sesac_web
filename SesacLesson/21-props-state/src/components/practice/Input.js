export default function Input({ setData }) {
  //   console.log(setData);
  const handleChange = evt => {
    // {
    //     fruit: "apple",
    //     background: "white",
    //     color: "black",
    //     content: "text",
    //   }
    // console.log("target", evt.target);
    // console.log("ctarget", evt.currentTarget);
    setData(prevState => {
      return { ...prevState, content: evt.target.value };
    });
  };
  return (
    <div>
      내용:{' '}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
