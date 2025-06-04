const express = require("express");
const z = require("zod");
const app = express();
app.use(express.json());

//how to make schema object
const schema = z.object({
  email: z.string(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneyId: z.array(z.number),
});

app.post("/health-checkup", (req, res) => {
  const kidneyId = req.body.kidneyId;
  const response = schema.safeParse(kidneyId);
  if (!response.success) {
    res.status(411).json({
      msg: "input invalid",
    });
  } else {
    res.json({
      response,
    });
  }
});
/*
function validateInput(arr){
const schema  = z.array(z.number());
const response = schema.safeparse(arr);
console.log(response);

}

validateInput([1,2,3])// success: True data:[1,2,3]
validateInput(["1",2,3])// success: false , error:[getter];
*/
app.listen(5203);
