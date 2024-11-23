{
  const movieName = "Deadpool";
  type MovieType = typeof movieName;

  const movie = {
    title: "Rock on",
    director: "Firoz Bhai",
  };

  type MovieDetails = typeof movie;

  const newMovie: MovieDetails = {
    title: "123",
    director: "abc",
  };
  type DetailsLog = {
    message: string;
    level: "info" | "warn" | "error";
  };

  function logMessage(input: string | number | DetailsLog) {
    if (typeof input == "string") {
      console.log("Simple message info ", input);
    } else if (typeof input === "number") {
      console.log("error code ...", input);
    } else if ("message" in input && "level" in input) {
      console.log(`Danger Level ${input.level} Instruction ${input.message}`);
    }
  }
  const test = logMessage({ message: "do google", level: "error" });
  console.log(test);
}
