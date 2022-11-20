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
                       select r in func challenge quit
                        do
                            case $r in
                                "func")
                                    node_modules/.bin/jest day1/part1/index.test.js
                                    break;;
                                "challenge")
                                    node_modules/.bin/jest day1/part1/challenge
                                    break;; 
                                "quit")
                                    exit;;
                                 *)
                                    echo "invalid option" & exit;;
                                esac
                        done;;
                        
                    "part2")
                        echo "Select mode"
                       select p in func challenge quit
                        do
                            case $p in
                                "func")
                                    node_modules/.bin/jest day1/part2/index.test.js
                                    break;;
                                "challenge")
                                    node_modules/.bin/jest day1/part2/challenge
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
            node_modules/.bin/jest day2;;
        "day3")
            node_modules/.bin/jest day3;;
        "day4")
            node_modules/.bin/jest day4;;
        "day5")
            node_modules/.bin/jest day1
            break;;
        *)
           echo "Ooops";;
    esac
done
done