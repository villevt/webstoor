package main

import (
	"github.com/julienschmidt/httprouter"
	"github.com/villevt/webstoor/routes"
)

func Router() *httprouter.Router {
	router := httprouter.New()
	router.GET("/", routes.Test)
	router.POST("/user/register", routes.UserRegister)

	return router
}
