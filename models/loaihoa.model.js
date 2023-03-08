const mongoose = require("mongoose");
const LoaiHoaSchema = mongoose.Schema({
  maloai: {
    type: Number,
    require: true,
    unique: true,
  },
  tenloai: String,
});


module.exports=mongoose.model("LoaiHoa",LoaiHoaSchema);