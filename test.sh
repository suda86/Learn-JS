#!/bin/bash

while true
do
echo "select day"
select lng in day1 day2 day3 day4 day5
do
    case $lng in
        "day1")
            echo "select part"
            select t in part1 part2 back quit
            do
                case $t in
                    "part1")
                        echo "Select mode"
                       select r in func chellange quit
                        do
                            case $r in
                                "func")
                                    node_modules/.bin/jest day1/part1/index.test.js
                                    break;;
                                "chellange")
                                    node_modules/.bin/jest day1/part1/chellange
                                    break;; 
                                "quit")
                                    exit;;
                                 *)
                                    echo "invalid option" & exit;;
                                esac
                        done;;
                        
                    "part2")
                        echo "Select mode"
                       select p in func chellange quit
                        do
                            case $p in
                                "func")
                                    node_modules/.bin/jest day1/part2/index.test.js
                                    break;;
                                "chellange")
                                    node_modules/.bin/jest day1/part2/chellange
                                    break;; 
                                "quit")
                                    exit;;
                                 *)
                                    echo "invalid option" & exit;;
                                esac
                        done;;
                    "quit")
                        exit;;
                    *)
                    echo "invalid option" & exit;;
                esac
            done;;
        "day2")
            echo "select part"
            select t in part1 part2 back quit
            do
                case $t in
                    "part1")
                        echo "Select mode"
                       select r in func chellange quit
                        do
                            case $r in
                                "func")
                                    node_modules/.bin/jest day2/part1/index.test.js
                                    break;;
                                "chellange")
                                    node_modules/.bin/jest day2/part1/chellange
                                    break;; 
                                "quit")
                                    exit;;
                                 *)
                                    echo "invalid option" & exit;;
                                esac
                        done;;
                        
                    "part2")
                        echo "Select mode"
                       select p in func chellange quit
                        do
                            case $p in
                                "func")
                                    node_modules/.bin/jest day2/part2/index.test.js
                                    break;;
                                "chellange")
                                    node_modules/.bin/jest day2/part2/chellange
                                    break;; 
                                "quit")
                                    exit;;
                                 *)
                                    echo "invalid option" & exit;;
                                esac
                        done;;
                    "quit")
                        exit;;
                    *)
                    echo "invalid option" & exit;;
                esac
            done;;
        "day3")
            echo "select part"
            select t in part1 part2 back quit
            do
                case $t in
                    "part1")
                        echo "Select mode"
                       select r in func chellange quit
                        do
                            case $r in
                                "func")
                                    node_modules/.bin/jest day3/part1/index.test.js
                                    break;;
                                "chellange")
                                    node_modules/.bin/jest day3/part1/chellange
                                    break;; 
                                "quit")
                                    exit;;
                                 *)
                                    echo "invalid option" & exit;;
                                esac
                        done;;
                        
                    "part2")
                        echo "Select mode"
                       select p in func chellange quit
                        do
                            case $p in
                                "func")
                                    node_modules/.bin/jest day3/part2/index.test.js
                                    break;;
                                "chellange")
                                    node_modules/.bin/jest day3/part2/chellange
                                    break;; 
                                "quit")
                                    exit;;
                                 *)
                                    echo "invalid option" & exit;;
                                esac
                        done;;
                    "quit")
                        exit;;
                    *)
                    echo "invalid option" & exit;;
                esac
            done;;
        "day4")
            # node_modules/.bin/jest day4;;
            echo "Coming soon"
            break;;
        "day5")
            # node_modules/.bin/jest day1
            echo "Coming soon"
            break;;
        *)
           echo "Ooops";;
    esac
done
done