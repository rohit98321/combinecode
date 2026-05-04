import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 p-6 shadow-lg space-y-4"
      >
        <h2 className="text-xl font-bold">Register</h2>

        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full border p-2"
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full border p-2"
        />

        <button className="w-full bg-green-500 text-white p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;