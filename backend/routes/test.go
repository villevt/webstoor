package routes

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func Test(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Print(w, "Test!")
}
