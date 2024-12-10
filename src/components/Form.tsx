type FormProps = {
  setMealName: React.Dispatch<React.SetStateAction<string>>;
  getMealData: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  mealName: string;
};

const Form = ({ setMealName, getMealData, mealName }: FormProps) => {
  return (
    <form onSubmit={getMealData}>
      <input
        onChange={(e) => setMealName(e.target.value)}
        type="text"
        name="mealName"
        placeholder="料理名を英語で入力"
        value={mealName}
        required
      />
      <button>検索</button>
    </form>
  );
};

export default Form;
