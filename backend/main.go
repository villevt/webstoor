package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	var addr string

	if err != nil || os.Getenv("HOSTNAME") == "" || os.Getenv("PORT") == "" {
		log.Println("No .env file, HOSTNAME or PORT specified. Defaulting to localhost:3000.")
		addr = "localhost:3000"
	} else {
		addr = os.Getenv("HOSTNAME") + ":" + os.Getenv("PORT")
	}

	log.Println("Server running on http://" + addr)
	log.Fatal(http.ListenAndServe(addr, Router()))
}
