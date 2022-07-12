package routes

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func UserRegister(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	println("test")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprint(w, "test")
}
