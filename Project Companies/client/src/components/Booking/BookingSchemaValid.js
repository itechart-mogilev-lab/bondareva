import { string, object, array, bool, number } from "yup";

const UserSchema = object().shape({
  address: string()
    .required("Enter is address")
    .min(10),
  days: array(string()).required(),
  regularity: object()
    .shape({
      _id: number().required(),
      name: string().required()
    }),
  recurrent: bool().required(),
  duration: number().when("recurrent", {
    is: true,
    then: number()
      .required()
      .min(1)
      .max(6)
  }),
  countRooms: object()
    .shape({
      toilet: number()
        .required()
        .min(0)
        .max(20),
      standart: number()
        .required()
        .min(0)
        .max(15),
      big: number()
        .required()
        .min(0)
        .max(15)
    })
    .required(),
  date: string().required(),
  startTime: string().required(),
  service: object().required()
});

export default UserSchema;
