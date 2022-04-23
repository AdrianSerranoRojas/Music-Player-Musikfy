import { connect as _connect } from "mongoose";

function connect() {
  return _connect(
    "mongodb+srv://admin:admin@muskfycluster.uijij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
}

export default connect;
