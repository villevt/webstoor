package main

import (
	"log"
	"github.com/joho/godotenv"
	"github.com/julienschmidt/httprouter"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file specified. Using default hostname and port.")
	}
	
}
