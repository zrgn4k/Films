import { Component, OnInit } from '@angular/core';

import { Film } from '../models/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsCollection: Film[] = [
    {
      name: "Shawshank Redemption", 
      description: "Andy Dufresne, a successful banker," +
       "is arrested for the murders of his wife and her lover," + 
       "and is sentenced to life imprisonment at the Shawshank prison. " +
       "He becomes the most unconventional prisoner.", 
      imagePath: "../../assets/img/Shawshank.jpg"
    },
    {
      name: "Titanic",
      description: "Seventeen-year-old Rose hails from an" +
      " aristocratic family and is set to be married. " +
      "When she boards the Titanic, she meets Jack Dawson, " +
      "an artist, and falls in love with him.",
      imagePath: "../../assets/img/Titanic.jpg"
    },
    {
      name: "Fast and Furios",
      description: "Dominic Toretto is a gang leader who is accused of " +
      "hijacking trucks and stealing over a million dollars worth of electronic"  +
      "equipment. The FBI sends LAPD officer Brian O'Conner undercover into Los Angeles' " +
      "street racing circuit to take down Toretto and his team.",
      imagePath: "../../assets/img/FastAndFurious.jpg"
    },
    {
      name: "Wrath of man",
      description: "The plot follows H, a cold and mysterious character working " +
      "at a cash truck company responsible for moving hundreds of millions of " +
      "dollars around Los Angeles each week.",
      imagePath: "../../assets/img/WrathOfMan.jpg"
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      description: "An 11-year-old orphan living with his unwelcoming aunt, " +
      "uncle, and cousin, who learns of his own fame as a wizard known to have " +
      "survived his parents' murder at the hands of the dark wizard Lord Voldemort " +
      "as an infant when he is accepted to Hogwarts School of Witchcraft and Wizardry.",
      imagePath: "../../assets/img/HarryPotterPhilosopherStone.jpg"
    },
    {
      name: "Escape from Pretoria",
      description: "Escape from Pretoria is a 2020 Australian prison film co-written " +
      "and directed by Francis Annan, based on the real-life prison escape by three political" +
      " prisoners in South Africa in 1979, starring Daniel Radcliffe and Daniel Webber.",
      imagePath: "../../assets/img/EscapeFromPretoria.jpg"
    },
    {
      name: "The King of Staten island",
      description: "Scott has been a case of arrested development since his firefighter dad died. " +
      "He spends his days smoking weed and dreaming of being a tattoo artist until events force" +
      " him to grapple with his grief and take his first steps forward in life.",
      imagePath: "../../assets/img/TheKingOfStatenIsland.jpg"
    },
    {
      name: "The Adams Family",
      description: "The film focuses on a bizarre, macabre, aristocratic family who " +
      "reconnect with what they believe to be a long-lost relative, Gomez's brother Fester " +
      "Addams, who is actually the adopted son of a loan shark intending to swindle the Addams " +
     "clan out of its vast wealth and fortune.",
      imagePath: "../../assets/img/AdamsFamily.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
