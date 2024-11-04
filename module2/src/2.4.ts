{
  // interface Generic
  interface Developer<T, N, X = null> {
    name: N;
    computer: {
      brand: string;
      model: string;
      year: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type DevOne = {
    name: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<DevOne, string> = {
    name: "rokib",
    computer: {
      brand: "Apple",
      model: "M1 Air",
      year: 2020,
    },
    smartWatch: {
      name: "xiaomi",
      model: "jk6666",
      display: "OLED",
    },
  };

  interface DevTwo {
    name: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface Bike {
    name: string;
    model: string;
  }
  const richDeveloper: Developer<DevTwo, string, Bike> = {
    name: "rokib",
    computer: {
      brand: "Asus",
      model: "M1 Air",
      year: 2010,
    },
    smartWatch: {
      name: "Apple",
      model: "Watch5",
      display: "LED",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      name: "Yamaha",
      model: "R15",
    },
  };
}
