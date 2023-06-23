import Button from "../global/Button/Button";

const SideBar = () => {
  return (
    <div>
      <h1>QuizTime</h1>
      <div>
        <Button text="Dashboard" background={true} />
        <Button text="History" background={false} />
        <Button text="Profile" background={false} />
      </div>
    </div>
  );
};

export default SideBar;
