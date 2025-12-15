import { Register } from "../../components/Register";
import { Navbar } from "../../components/Navbar";

export const AuthRegister = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center mt-32">
        <Register />
      </main>
    </>
  );
};
