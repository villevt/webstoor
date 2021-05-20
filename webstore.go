package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	s := &http.Server{
		Addr:           "localhost:8080",
		Handler:        r,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	r.GET("/ping", GETIndex)
	s.ListenAndServe() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
