export const userData = `{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email": "abc@gmail.com",
  "skills": [
    {
      "id": 1,
      "name": "JavaScript",
      "start_date": "2019-01-01",
      "end_date": "2019-01-02",
      "experience": "1 year"
    },
    {
      "id": 2,
      "name": "React",
      "start_date": "2019-01-01",
      "end_date": "2019-01-02",
      "experience": "1 year"
    },
    {
      "id": 3,
      "name": "Node",
      "start_date": "2019-01-01",
      "end_date": "2019-01-02",
      "experience": "1 year"
    }
  ],
  "address": {
    "id": 1,
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  },
  "certifications": [
    {
      "id": 1,
      "name": "AWS",
      "date": "2019-01-01"
    },
    {
      "id": 2,
      "name": "Azure",
      "date": "2019-01-01"
    }
  ]
}`;

type ApiRes<T> = { data: T; status: number; message: string };

async function fetchData<T>(url: string): Promise<ApiRes<T>> {
  const res = await fetch(url);
  const data = await res.json();
  return { data, status: res.status, message: res.statusText };
}
