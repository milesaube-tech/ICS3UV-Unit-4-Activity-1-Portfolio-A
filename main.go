// Author: Miles Aube
// Version: 1.0.0
// Date: 2025-12-06
// Fileoverview: This program prints a 10 by 10 grid.
// Odd rows contain X's, even rows contain O's.

package main

import "fmt"

func main() {
    // Output title
    fmt.Println("10 by 10 Grid with X's and O's:")

    // Loop through 10 rows
    for row := 1; row <= 10; row++ {
        line := "" // reset each row

        // Loop through 10 columns
        for col := 1; col <= 10; col++ {
            if row%2 == 1 {
                // Odd rows: add X
                line += "X "
            } else {
                // Even rows: add O
                line += "O "
            }
        }

        // Print completed row
        fmt.Println(line)
    }

    fmt.Println("\nDone.")
}