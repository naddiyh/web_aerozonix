export const Login = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-[350px] flex-col gap-12 rounded-md border p-8">
        <div>logo</div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="username"
            className="rounded-md border p-2"
          />
          <input
            type="email"
            placeholder="username"
            className="rounded-md border p-2"
          />
          <button
            type="button"
            className="rounded-md bg-secondary-blue p-2 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
