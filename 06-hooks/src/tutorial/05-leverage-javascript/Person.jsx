import avatar from "../../assets/default-avatar.svg";
const Person = ({ name, nickName = "shakeAndBake", images, age }) => {
  // before optional chaining
  //   console.log("id", id);
  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
      <p>Age : {age}</p>
    </div>
  );
};
export default Person;
