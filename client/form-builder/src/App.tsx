import "./App.css";
import { Formik, Field, Form } from "formik";
import { IForm } from "./types/form.type";
import { createRecipe } from "./apis/recipe.api";

const CustomInputComponent = (props: any) => {
  if (props.type === "textarea")
    return <textarea className="w-full" {...props} />;

  return <input className="w-full" type="text" {...props} />;
};
function App() {

  // Functions
  const handleSubmit = async (values: IForm): Promise<void> => {
    const data: any = await createRecipe(values);
    if (data) alert("Created recipe!");
  };

  return (
    <div>
      <p className="text-2xl my-2">Creat your recipe</p>
      <Formik
        initialValues={{}}
        onSubmit={async (values: IForm) => {
          await handleSubmit(values);
        }}
      >
        <Form>
          <div className="grid gap-4 grid-cols-2">
            <div>
              <p className="text-left mb-1">Name</p>
              <Field
                className="w-full px-2 py-1"
                name="name"
                type="text"
                placeHolder={"Name"}
              />
            </div>
            <div>
              <p className="text-left mb-1">Serve</p>
              <Field
                className="w-full px-2 py-1"
                name="serving"
                type="number"
                placeHolder={"How many serves"}
              />
            </div>
            <div className="col-span-2">
              <p className="text-left mb-1">Ingredients</p>
              <Field
                name="ingredient"
                as={CustomInputComponent}
                placeholder="Ingredients"
                type="textarea"
                row="4"
                className="w-full px-2 py-1"
              />
            </div>
            <div className="col-span-2">
              <p className="text-left mb-1">Instruction</p>
              <Field
                name="instruction"
                as={CustomInputComponent}
                placeholder="Instruction"
                type="textarea"
                row="4"
                className="w-full px-2 py-1"
              />
            </div>
          </div>
          <button className="mt-4 border-2 border-gray-400" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
