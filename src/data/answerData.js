function shuffleArray(ans) {
    for (var i = ans.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = ans[i];
      ans[i] = ans[j];
      ans[j] = temp;
    }

    return ans;
  }

  export const wrongAnswersA = shuffleArray(
    [
        "Smooth Fox Terrier",
        "Rat Terrier",
        "Patterdale Terrier",
        "Brittany",
        "Eurasier",
        "Leonberger",
        "Airedale Terrier",
        "Yorkshire Terrier",
        "Lagotto Romagnolo",
        "Chow Chow",
        "Collie",
        "Catahoula Leopard Dog",
        "Pumi",
        "Beauceron",
        "Weimaraner",
        "Miniature Schnauzer",
        "Austrialian Terrier",
        "Australian Kelpie",
        "Cairn Terrier",
        "Chihuahua",
        "Cocker Spaniel",
        "Irish Setter",
        "Boykin Spaniel",
        "Wire Fox Terrier",
        "Maltese",
        "Field Spaniel",
        "Spinone Italiano",
        "St. Bernard",
        "Tibetan Spaniel",
        "Boxer",
        "Pharaoh Hound",
        "Bedlington Terrier",
        "Belgian Malinois",
        "Bull Terrier",
        "Border Collie",
        "Toy Fox Terrier",
        "English Toy Spaniel",
        "Swedish Vallhund"
    ]
  )

  export const wrongAnswersB = shuffleArray(
    [
        "Chinook",
        "Chinese Shar-Pei",
        "Scottish Terrier",
        "Miniature Pinscher",
        "Japanese Chin",
        "Saluki",
        "Pekingese",
        "Gordon Setter",
        "Portugese Water Dog",
        "Greyhound",
        "Silky Terrier",
        "Poodle",
        "Russian Toy",
        "Doberman Pinscher",
        "Bluetick Coonhound",
        "Komondor",
        "Scottish Deerhound",
        "Pug",
        "Bullmastiff",
        "Plott",
        "Tibetan Terrier",
        "Labrador Retriever",
        "Papillon",
        "Akita",
        "Bichon Frise",
        "Italian Greyhound",
        "Standard Schnauzer",
        "Flat Coat Retriever",
        "Great Pyrenees",
        "German Pinscher",
        "Boston Terrier",
        "Presa Canario",
        "Lhasa Apso",
        "Shetland Sheepdog",
        "Norwich Terrier",
        "Kuvasz",
        "English Shepherd",
        "Coton De Tulear",
        "Irish Wolfhound"
    ]
  )

  export const wrongAnswersC = shuffleArray(
    [
        "Basenji",
        "Shiloh Shepherd",
        "Whippet",
        "American Bulldog",
        "Giant Schnauzer",
        "Alaskan Malamute",
        "Puli",
        "Border Terrier",
        "Boerboel",
        "Pointer",
        "Finnish Lapphund",
        "Siberian Husky",
        "Finnish Spitz",
        "Belgian Tervuren",
        "Harrier",
        "Australian Cattle Dog",
        "Irish Terrier",
        "Tibetan Mastiff",
        "Glen of Imaal Terrier",
        "Thai Ridgeback",
        "Spanish Water Dog",
        "Schipperke",
        "Redbone Coonhound",
        "Caucasian Shepherd",
        "Cane Corso",
        "English Setter",
        "English Toy Terrier",
        "Keeshond",
        "Shiba Inu",
        "Rhodesian Ridgeback",
        "Dogo Argentino",
        "Bloodhound",
        "Dutch Shepherd",
        "Havanese",
        "Dachshund",
        "Bulldog",
        "Japanese Spitz",
        "Lancashire Heeler",
        "Barbet",
        "Kooikerhondje",
        "Old English Sheepdog",
        "Briard",
        "American Bully",
        "American Eskimo Dog",
        "Bouvier des Flandres",
        "Clumber Spaniel"
    ]
  )