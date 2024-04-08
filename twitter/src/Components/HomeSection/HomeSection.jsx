import { Avatar, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useState } from "react";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});


function HomeSection() {
  const [uploadingImage, setuploadingImage] = useState(false);
  const [selectedImage, setselectedImage] = useState("");

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  const handleSelectImage = (event) => {
    setuploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setselectedImage(imgUrl);
    setuploadingImage(false);
  };
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABF1BMVEWCmc3d////x07dpYAREiRgPjx7jo4AAAt+mM//yEfi///ZunrStoV/lsx7ksuNptTW9/u7hWGGntBfOTOpxOHgpXzaooOZstl2jMfP6/XH5/OgutyEntRhQ0W20+nf+fD8y13h9ue+2uxkTFRZNzjPmngAAABmUFxwaoRdNSt3f6ZoRkFyTkaUaliziHSynqiem7fGoZbuv2f6wlf60Gzm7tLw4KL403jp68b02Y3/wzj214QAABZdXWV8jLpqXG1zdJWrfGSDXE66iW1MLDGQgI6fj53Dh1ibbVOqjIuOlbqYkKbOoo++oJ2yjoOipbK/r6DnrHTCsZOwqqXstWns5bZMTFciIzEyMzt5eoGXl5xHSEq5uLv8GYckAAAJQklEQVR4nO2caWPauBqFDVwmtideMPsSQsA0KxMSslAmJCVkmk6ae9N0MnTo9P//jpFtFluWZL3C5ObDnA8poa789Eh6tUtKrCRVVROmWS6XK67QB9N0v1xJ0ipAiXIzVy0ahiXpM0mWYRSruWY5sQqYIBTiqeQMxKIhSQE53yA6I1dBZK8HparletFCQBJDCMwq1stChoGhEBGyCLeHAqYhwwS4gFBqol7V2BbhhmnVOjQbQVCqmTP4PAr6ZeRMEBYACuWbpEOJPOkSysV1QJk5SxDJxbJyZtxQqlnXVkBysbQ6bybyQakVY0UkR5pR4aPigVLNIqTCMaj0IpdZHFBqMw6bPOlGk4MqEko1q6W4kByVqtFmRUGp5fhs8qQbkdEhCqopxVKa/NKk5mpQuZht8qTnVoAyq2thQlRVZiRlQZlxFycflcGiYkCZxdiL01JakUFFhVJNa41MbK+oUGv1yRHDKyqUsWYmpykEQqnrqnd+6VVKFKVAvQaTQwWAUuuvwoSo6kSvSFBqc+3laS6N2GkgQZkC7Z1ck2ueYFASqQqSoMDBoCZdH+zd7LZard2bvYNryD/XilxQag7GVKsd7O3u72eR0ul0Nru/39q75vdLy4UzMASlVmBM2odW2sVZCv26C0gg3HEPQ4GiZu1gdz9NUDZ9wGuWZkRD1UFGfcBMWmr/gDcNrR4FVYYgSTdEmzy1+JMps6FUUM3bYzCl0/xWFVUWlNoEhPIamyn7gTslHQuhmFMAo+RrJhOC4o4LeLAKQIGMklpMpnT2QOPOQMyqIBSkfflAq3cztVC04DVLs6hQahMyFm5FQG1tZdNbvDlYClgVgIJUvUCJsmlgvKkFK6AfqsKPJNVu5kbZh0dIh0QwbihJqpChYDFqXswPR+0UUnt8S6DihwpY5XcKUqKut2ZM49RcnTAVwKkS0SlYH3gGZd+mUgwq7oIe7Bn7nALl3twpP1TKz3Pr/GgB+lUGySlIMV9Cpcc+qPHCqrvRCH3O7kI6xxUCFKzPUlsU9HbeK+jOz5HtYtnpUd6F2gNA+XowCyhY587XGtud8Xh8ezTzqoPCw23H+XhkA/pUUqCzt4AygTOby+Bp2/bdUXuehe32/GMnvX8NSbFk4lDw8efuopmx050UQR17CwS1rH8LKPC4ah7S7bvbMYkp1cnegBJcxs85lGkAmRAUalxQE9NpE5FSqdvsHizFxYzVHKpsAZnkvezILUB5ClPq1uYe0XiyyhgUdPpA/tyxRzQcr8QfpX+Dpak1MSjgsFj+eP/JJhZvP9T97zIIKheEApfzcSYSKn2YyTxAqBYlfQZlwoqU/HCfGQXbvTCUfZTJfARZZZlBKFiUkrsI6jAC6q4DhdKDUGVgPEdOZQ6PaMHA1fjuUybzGQRVKgegQGMrR+NM5ogDyoJBNf1Q8EbmI4I6ZEKNUJGC1b5FQzODAkYEybFqZI+ZZaqNKh8szfkE2gyqCoVCgYrpk0OV+R2YqFYNQAmsefxyHwF1P4Y2XfNANYMSWPSQP1NbPU/H4CTn/TxxKElmMxVA0dwTBgVnkuQTllX5RzhTHFBdJhQsbhKhRBY+HgosKIEE44CSj+lW5Y8FjIoDSpLoUAVg3HSF1T6xtVm6VWJGYXFKcMGYXqpEmHAowZ0a1ArYFYLSg22f6FKo/EiiEss8vJeQqAhuR5JJGZg/EfwvBvtT4J7nkiqcgflHwbTwniewj+6nwmugUPviCeujm+J7IzCq/H9FE0JhKgglGhNcqm4MZdyFmi/RCI6Qg4n9bzk7dS+eTGiEDJ5LCOiXTMabTM9k7kWalzkUPpcAnnXxC4235roXC5uuQrMu8PkpX2LOwMVTW6gbNVNofgo+nvFB5WMp6Fo1NL0IHiMv9RAP1HIlUnh2eCk5AHUiDBWeHV4hUgVamvyjqOO+dSzfioNAarIsSxbWJnct92uwdMKKA3BtxnmxLD10j08KeNtXODnuPshwMNLaDP8qlvNCC/E8FlL5PKE/5XzpklkAMv82APB6n6zL1tOXzVOlR+LxkT0PGqebX54sXecCo6z38ayMynJ387SXVJB6LCSkZ8V5LNk7/drVOLDIK6M8HXX56ecBepGrHnt+o3A6e05RBpvRbY+eo6whRxZ1+Y/k7E3Oy57ZUMmllORT5P+XstoeWdTlL4rvTckea9ReeA48qzyxvQrudglslmAPH2QjGZDCzL9e8Nke26dShQYVMXqXf1aCVIyiXngOPppUNlkZiG2BC25VYrXKcjeJ64WagYXQsw2DkYF68NQD//4p+auCv4iegachKOULHYq5fwqVKrpV8mYIihYWCmGmpPKVnrReYe40Y235xouU5xUpB09JT25SnQptAcd3LzIOEZCgCOWq8NwjPUeH0ix8/zAOpdL3TJChlF4giBbyL6SnmFCh/d/hvcPUsk6GcrBe8gVP+eeXJO0pGhRhS3MYqgyFctTrvby8nPZ6NCQWFL71lLj1m9aFYUEl3R4B8+8pUOFNukQotUimYkNFiQKl47thKVC04ynrgCIfUyFCkbekrwWqQno/+TQIsQ1cAxS+aZgFRe6Exg+lE44S0KGIpw1jh6KePaRBEapg3FDEiseESpihaZiYoTT6aUj6ocOQV/FC0X1in4TEujGxQjFPjbLOjGKdqzihNNopukgorA7GCKWxz/yyoVDvSosfSgv3oCBQzqhZixtKk4htCwBKTSwqYUxQqFO36tl2pHpJiw9KK9Wjr73guS+h7JkVB5Re5LkghOu6CzPn3CyxOpSm892lwnkHh1nUtJWhNL7LLgBXqDSNVaGMqGsS4FCJRL8RMTZgISmN89jvdXG1/efZQAhLGZz9uQ14EewCo+3+GdwtRTnrQ5AErno6v2hA7FIGjYtz6DvAUMiu80slaug5s0hRLs9hJolCOepfXCbZhimD5OVFXyx1QSjk107/fW8wGOCmOb+jr5Pv+zsCHq0I5Wmnf/H+18uzRqPhAKE/zi5/fX/R31kt1RWhXG1v7+zsnCOhP7aF7fEpDqjY9S8Ur94mlPoGJf30BiVtvEFJ/3mDIkFdXS0+vSKJTw7U1eTbt8nG1dW7ydXVxtXGX9PpZLLxDv3+1/DdcPJ/gxp+m07/nkynw+F0Mvw+/Xv6Y/hjOPwx/f598lpQ/kz5B00EGM2yXuigAAAAAElFTkSuQmCC"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="what is happening"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">
                    {" "}
                    {formik.errors.content}{" "}
                  </span>
                )}
              </div>
              {/*<div>
                <img src = " " alt = "" />
              </div>*/}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imagefile"
                      className="hidden "
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingy: "8px",
                      paddingx: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
         {[1,1,1,1,1].map((item)=><TweetCard/>)} 
      </section>
    </div>
  );
}

export default HomeSection;
