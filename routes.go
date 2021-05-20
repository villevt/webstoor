package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GETIndex(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"index": "lol"})
}
