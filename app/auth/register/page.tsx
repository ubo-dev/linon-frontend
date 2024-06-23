import { Button, Input, Spacer } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function Page() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "3rem" }}>
      <h1
        className={title({
          color: "green",
          size: "sm",
          className: "flex justify-center",
        })}
      >
        {" "}
        Register{" "}
      </h1>
      <form className="mt-8">
        <Input fullWidth isClearable required placeholder="Username" />

        <Spacer y={2} />

        <Input
          fullWidth
          isClearable
          required
          placeholder="Email"
          type="email"
        />

        <Spacer y={2} />

        <Input
          fullWidth
          isClearable
          required
          placeholder="Password"
          type="password"
        />

        <Spacer y={2} />

        <Button
          className="ml-44 px-10 text-white"
          color="success"
          radius="full"
          type="submit"
          variant="solid"
        >
          Register
        </Button>
      </form>
    </div>
  );
}
