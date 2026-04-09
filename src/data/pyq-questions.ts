import { sanitize } from "./questions";

export interface PYQQuestion {
  question_id: number;
  question: string;
  options: string[];
  correct_option: string;
  explanation: string;
  exam?: string;
}

export const pyqQuestions: PYQQuestion[] = 
[
  {
    "question_id": 1,
    "question": "Q:1 A number has been denoted to each of the given letters. Select the option from the following four possible arrangements of these numbers that form a meaningful word. E = 1, N = 2, T = 3, S = 4, T = 5, D = 6, U = 7 [1]",
    "options": [
      "1. 4, 3, 7, 6, 1, 2, 5 [1]",
      "2. 2, 1, 4, 3, 6, 7, 5 [1]",
      "3. 4, 3, 7, 1, 6, 5, 2 [1]",
      "4. 2, 1, 4, 6, 3, 5, 7 [1]"
    ],
    "correct_option": "1. 4, 3, 7, 6, 1, 2, 5 [2]",
    "explanation": "The correct answer is option 1 i.e. 4, 3, 7, 6, 1, 2, 5. S = 4, T = 3, U = 7, D = 6, E = 1, N = 2, T = 5. So, the word formed is STUDENT. [2]",
    "exam": "CGL Tier II - 3 March 2023 - Shift 1 [1]"
  },
  {
    "question_id": 2,
    "question": "Q:2 A number has been denoted to each of the given letters. Select the option from the following four possible arrangements of these numbers that form a meaningful word. E = 1, Z = 2, L = 3, P = 4, U = 5, Z = 6 [1]",
    "options": [
      "1. 4, 5, 1, 6, 2, 3 [1]",
      "2. 6, 1, 4, 3, 5, 2 [1]",
      "3. 1, 5, 3, 4, 2, 6 [1]",
      "4. 4, 5, 6, 2, 3, 1 [1]"
    ],
    "correct_option": "4. 4, 5, 6, 2, 3, 1 [2]",
    "explanation": "The correct answer is option 4 i.e. 4, 5, 6, 2, 3, 1. P = 4, U = 5, Z = 6, Z = 2, L = 3, E = 1. So, the word formed is PUZZLE. [2]",
    "exam": "CGL Tier II - 2 March 2023 - Shift 1 [1]"
  },
  {
    "question_id": 3,
    "question": "Q:3 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Lambast 2. Legacy 3. Lighten 4. Languish 5. Laughter 6. Lightly [1]",
    "options": [
      "1. 1, 4, 5, 3, 2, 6 [1]",
      "2. 1, 4, 5, 2, 3, 6 [1]",
      "3. 1, 5, 4, 2, 3, 6 [1]",
      "4. 1, 5, 4, 3, 6, 2 [1]"
    ],
    "correct_option": "1. 1, 4, 5, 3, 2, 6 [2]",
    "explanation": "The correct answer is option 1 i.e. 1, 4, 5, 3, 2, 6. 1. Lambast, 4. Languish, 5. Laughter, 3. Legacy, 2. Lighten, 6. Lightly. [2]",
    "exam": "CGL - 17 July 2023 - Shift 4 [1]"
  },
  {
    "question_id": 4,
    "question": "Q:4 Which option represents the correct order of the given words as they would appear in an English dictionary? 1. Highway 2. History 3. Hired 4. Hierarchy 5. Hibiscus [1]",
    "options": [
      "1. 5, 4, 3, 1, 2 [1]",
      "2. 5, 4, 3, 2, 1 [1]",
      "3. 5, 4, 1, 3, 2 [1]",
      "4. 5, 4, 2, 1, 3 [1]"
    ],
    "correct_option": "3. 5, 4, 1, 3, 2 [2]",
    "explanation": "The correct answer is option 3 i.e. 5, 4, 1, 3, 2. 5. Hibiscus, 4. Hierarchy, 1. Highway, 3. Hired, 2. History. [2]",
    "exam": "CGL - 17 July 2023 - Shift 3 [1]"
  },
  {
    "question_id": 5,
    "question": "Q:5 Each vowel in the word 'ETHICAL' is changed to the following letter in the English alphabetical series and each consonant is changed to the previous letter in the English alphabetical series. In the newly formed word, how many alphabets are there in the English alphabetical series between the alphabet which is 3rd from the left and 1st from the right? [1]",
    "options": [
      "1. Four [1]",
      "2. Three [1]",
      "3. Two [1]",
      "4. Five [1]"
    ],
    "correct_option": "2. Three [2]",
    "explanation": "The correct answer is option 2 i.e. Three. ETHICAL becomes F S G J B B K. There are three letters between G and K. [2]",
    "exam": "CGL - 17 July 2023 - Shift 3 [1]"
  },
  {
    "question_id": 6,
    "question": "Q:6 Which option represents the correct order of the given words as they would appear in an English dictionary? 1. Greed 2. Green 3. Grown 4. Grip 5. Granite [1]",
    "options": [
      "1. 5, 2, 1, 4, 3 [1]",
      "2. 5, 4, 1, 2, 3 [1]",
      "3. 5, 1, 2, 4, 3 [1]",
      "4. 5, 1, 4, 3, 2 [1]"
    ],
    "correct_option": "3. 5, 1, 2, 4, 3 [2]",
    "explanation": "The correct answer is option 3 i.e. 5, 1, 2, 4, 3. 5. Granite, 1. Greed, 2. Green, 4. Grip, 3. Grown. [2]",
    "exam": "CGL - 17 July 2023 - Shift 3 [1]"
  },
  {
    "question_id": 7,
    "question": "Q:7 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Significant 2. Sinful 3. Signed 4. Singing 5. Simplify [1]",
    "options": [
      "1. 3, 5, 1, 2, 4 [1]",
      "2. 3, 5, 1, 4, 2 [1]",
      "3. 3, 2, 1, 5, 4 [1]",
      "4. 3, 1, 2, 5, 4 [1]"
    ],
    "correct_option": "1. 3, 1, 5, 2, 4 [2]",
    "explanation": "The correct answer is option 1 i.e. 3, 1, 5, 2, 4. 3. Signed, 1. Significant, 5. Simplify, 2. Sinful, 4. Singing. [2]",
    "exam": "CGL - 18 July 2023 - Shift 3 [1]"
  },
  {
    "question_id": 8,
    "question": "Q:8 Each vowel in the word 'CAPSULE' is changed to the previous letter in the English alphabetical series and each consonant is changed to the following letter in the English alphabetical series. In the newly formed word, how many alphabets are there in the English alphabetical series between the alphabet which is 3rd from the left and 3rd from the right? [1]",
    "options": [
      "1. Three [1]",
      "2. Four [1]",
      "3. One [1]",
      "4. Two [1]"
    ],
    "correct_option": "4. Two [2]",
    "explanation": "The correct answer is option 4 i.e. Two. CAPSULE operation yields DZQTTMD. The alphabet which is 3rd from the left: Q. The alphabet which is 3rd from the right: T. The number of alphabets between Q and T in the English alphabetical series: R, S (total: 2 alphabets). [2]",
    "exam": "CGL - 18 July 2023 - Shift 1 [1]"
  },
  {
    "question_id": 9,
    "question": "Q:9 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Tertiary 2. Terrace 3. Terrain 4. Termite 5. Territory 6. Terminate [1]",
    "options": [
      "1. 4, 6, 3, 2, 5, 1 [1]",
      "2. 4, 6, 2, 3, 1, 5 [1]",
      "3. 6, 4, 2, 3, 5, 1 [1]",
      "4. 6, 4, 3, 2, 5, 1 [1]"
    ],
    "correct_option": "3. 6, 4, 2, 3, 5, 1 [2]",
    "explanation": "The correct answer is option 3 i.e. 6, 4, 2, 3, 5, 1. 6. Terminate, 4. Termite, 2. Terrace, 3. Terrain, 5. Territory, 1. Tertiary. [2]",
    "exam": "CGL - 14 July 2023 - Shift 4 [1]"
  },
  {
    "question_id": 10,
    "question": "Q:10 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Strident 2. Student 3. Shirking 4. Stuffy 5. Spider 6. Spawn [1]",
    "options": [
      "1. 3, 6, 5, 1, 2, 4 [1]",
      "2. 3, 5, 6, 1, 2, 4 [1]",
      "3. 3, 6, 5, 1, 4, 2 [1]",
      "4. 3, 5, 6, 1, 4, 2 [1]"
    ],
    "correct_option": "1. 3, 6, 5, 1, 2, 4 [2]",
    "explanation": "The correct answer is option 1 i.e. 3, 6, 5, 1, 2, 4. 3. Shirking, 6. Spawn, 5. Spider, 1. Strident, 2. Student, 4. Stuffy. [2]",
    "exam": "CGL - 14 July 2023 - Shift 2 [1]"
  },
  {
    "question_id": 11,
    "question": "Q:11 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Salesman 2. Salvage 3. Salinity 4. Salary 5. Salmon 6. Salivate [3]",
    "options": [
      "1. 4, 3, 1, 6, 5, 2 [3]",
      "2. 4, 1, 3, 6, 5, 2 [3]",
      "3. 4, 1, 6, 3, 5, 2 [3]",
      "4. 1, 4, 3, 6, 2, 5 [3]"
    ],
    "correct_option": "2. 4, 1, 3, 6, 5, 2 [2]",
    "explanation": "The correct answer is option 2 i.e. 4, 1, 3, 6, 5, 2. 4. Salary, 1. Salesman, 3. Salinity, 6. Salivate, 5. Salmon, 2. Salvage. [2]",
    "exam": "CGL - 17 July 2023 - Shift 2 [3]"
  },
  {
    "question_id": 12,
    "question": "Q:12 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Refinery 2. Reflect 3. Reference 4. Refugee 5. Refillable 6. Reformist [3]",
    "options": [
      "1. 3, 5, 1, 2, 6, 4 [3]",
      "2. 2, 5, 1, 3, 2, 4, 6 [3]",
      "3. 3, 5, 1, 3, 2, 6, 4 [3]",
      "4. 4, 3, 1, 5, 2, 6, 4 [3]"
    ],
    "correct_option": "1. 3, 5, 1, 2, 6, 4 [2]",
    "explanation": "The correct answer is option 1 i.e. 3, 5, 1, 2, 6, 4. 3. Reference, 5. Refillable, 1. Refinery, 2. Reflect, 6. Reformist, 4. Refugee. [2]",
    "exam": "CGL - 17 July 2023 - Shift 1 [3]"
  },
  {
    "question_id": 13,
    "question": "Q:13 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Warriors 2. Warehouse 3. Warcraft 4. Warranty 5. Wardrobe 6. Wardenship [3]",
    "options": [
      "1. 3, 6, 5, 2, 1, 4 [3]",
      "2. 2, 3, 5, 6, 2, 1, 4 [3]",
      "3. 3, 3, 5, 6, 2, 4, 1 [3]",
      "4. 4, 3, 6, 5, 2, 4, 1 [3]"
    ],
    "correct_option": "4. 3, 6, 5, 2, 4, 1 [2]",
    "explanation": "The correct answer is option 4 i.e. 3, 6, 5, 2, 4, 1. 3. Warcraft, 6. Wardenship, 5. Wardrobe, 2. Warehouse, 4. Warranty, 1. Warriors. [2]",
    "exam": "CGL - 14 July 2023 - Shift 1 [3]"
  },
  {
    "question_id": 14,
    "question": "Q:14 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Pancakes 2. Pandemic 3. Panicked 4. Pancreas 5. Panorama 6. Panther [3]",
    "options": [
      "1. 1, 4, 2, 3, 5, 6 [3]",
      "2. 2, 4, 1, 2, 3, 5, 6 [3]",
      "3. 3, 1, 4, 2, 3, 6, 5 [3]",
      "4. 4, 2, 1, 4, 3, 6, 5 [3]"
    ],
    "correct_option": "1. 1, 4, 2, 3, 5, 6 [2]",
    "explanation": "The correct answer is option 1 i.e. 1, 4, 2, 3, 5, 6. 1. Pancakes, 4. Pancreas, 2. Pandemic, 3. Panicked, 5. Panorama, 6. Panther. [2]",
    "exam": "CGL - 14 July 2023 - Shift 3 [3]"
  },
  {
    "question_id": 15,
    "question": "Q:15 The sentence below has a word in which the letters are jumbled up. Rearrange the letters of that word, written in capital letters, to form the correct word. After a long negotiation, they finally reached a EADL that satisfied both parties. [3]",
    "options": [
      "1. DALE [3]",
      "2. LEAD [3]",
      "3. DEAL [3]",
      "4. LADE [3]"
    ],
    "correct_option": "3. DEAL [2]",
    "explanation": "The correct answer is option 3 i.e. DEAL. Correct word: DEAL; Meaning: an agreement or arrangement, especially in business. [2]",
    "exam": "CHSL Tier II - 26 Jun 2023 - Shift 1 [3]"
  },
  {
    "question_id": 16,
    "question": "Q:16 Select the option that indicates the correct arrangement of the given words in the order in which they appear in an English dictionary. 1. Talisman 2. Tantamount 3. Tangential 4. Tantalizing 5. Taciturn",
    "options": [
      "1. 4, 2, 3, 5, 1",
      "2. 1, 4, 3, 5, 2",
      "3. 3, 5, 1, 4, 2",
      "4. 5, 1, 3, 4, 2"
    ],
    "correct_option": "4. 5, 1, 3, 4, 2",
    "explanation": "The correct answer is option 4 i.e. 5, 1, 3, 4, 2. 5. Taciturn, 1. Talisman, 3. Tangential, 4. Tantalizing, 2. Tantamount.",
    "exam": "CHSL Tier II - 26 Jun 2023 - Shift 1"
  },
  {
    "question_id": 17,
    "question": "Q:17 The sentence below has a word in which the letters are jumbled up. Rearrange the letters of that word, written in capital letters, to form the correct word. The ETNSIL night was interrupted only by the gentle rustling of leaves in the breeze.",
    "options": [
      "1. SILENT",
      "2. LISTEN",
      "3. TENILS",
      "4. NILETS"
    ],
    "correct_option": "1. SILENT",
    "explanation": "The correct answer is option 1 i.e. SILENT. Correct word: SILENT; Meaning: where there is no noise.",
    "exam": "CHSL Tier II - 26 Jun 2023 - Shift 1"
  },
  {
    "question_id": 18,
    "question": "Q:18 Each of the letters in the word STRANGE are arranged in alphabetical order. How many letters are there in the English alphabetical series between the letter which is fourth from the left and the one which is second from the right in the new letter cluster thus formed?",
    "options": [
      "1. Five",
      "2. Four",
      "3. Three",
      "4. Two"
    ],
    "correct_option": "2. Four",
    "explanation": "The correct answer is option 2 i.e. Four. Given word: STRANGE. Arranged alphabetically: AEGNRST. The fourth letter from the left is N; The second letter from the right is S. The letters between N and S in the English alphabetical series are O, P, Q, R (four letters).",
    "exam": "CHSL - 04 Aug 2023 - Shift 2"
  },
  {
    "question_id": 19,
    "question": "Q:19 Each of the letter in the word JOURNAL are arranged in alphabetical order. How many letters are there in the English alphabetical series between the letter which is fourth from the left and the one which is second from the right in the new letter cluster thus formed?",
    "options": [
      "1. Six",
      "2. Three",
      "3. Five",
      "4. Four"
    ],
    "correct_option": "2. Three",
    "explanation": "The correct answer is option 2 i.e. Three. Given word: JOURNAL. Arranged alphabetically: AJLNORU. The fourth letter from the left is N and the second from the right is R. The letters between N and R in the English alphabetical series are O, P, Q (three letters).",
    "exam": "CHSL - 02 Aug 2023 - Shift 2"
  },
  {
    "question_id": 20,
    "question": "Q:20 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Brochure 2. Brine 3. Bright 4. Brief 5. Brocade",
    "options": [
      "1. 1, 2, 3, 4, 5",
      "2. 1, 2, 3, 5, 4",
      "3. 4, 3, 2, 5, 1",
      "4. 3, 2, 5, 4, 1"
    ],
    "correct_option": "3. 4, 3, 2, 5, 1",
    "explanation": "The correct answer is option 3 i.e. 4, 3, 2, 5, 1. 4. Brief, 3. Bright, 2. Brine, 5. Brocade, 1. Brochure.",
    "exam": "CPO Tier I - 05 Oct 2023 - Shift 3"
  },
  {
    "question_id": 21,
    "question": "Q:21 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Warehouse 2. Warden 3. Warship 4. Wardrobe 5. Warrant 6. Warfare",
    "options": [
      "1. 4, 2, 1, 6, 5, 3",
      "2. 2, 4, 1, 6, 5, 3",
      "3. 2, 4, 6, 5, 1, 3",
      "4. 2, 4, 1, 5, 6, 3"
    ],
    "correct_option": "2. 2, 4, 1, 6, 5, 3",
    "explanation": "The correct answer is option 2 i.e. 2, 4, 1, 6, 5, 3. 2. Warden, 4. Wardrobe, 1. Warehouse, 6. Warfare, 5. Warrant, 3. Warship.",
    "exam": "CPO Tier I - 05 Oct 2023 - Shift 3"
  },
  {
    "question_id": 22,
    "question": "Q:22 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Desperate 2. Desolate 3. Destruction 4. Desire 5. Descend 6. Destination",
    "options": [
      "1. 5, 4, 2, 1, 3, 6",
      "2. 5, 4, 1, 6, 2, 3",
      "3. 5, 4, 2, 1, 6, 3",
      "4. 5, 4, 1, 2, 6, 3"
    ],
    "correct_option": "3. 5, 4, 2, 1, 6, 3",
    "explanation": "The correct answer is option 3 i.e. 5, 4, 2, 1, 6, 3. 5. Descend, 4. Desire, 2. Desolate, 1. Desperate, 6. Destination, 3. Destruction.",
    "exam": "CPO Tier I - 05 Oct 2023 - Shift 1"
  },
  {
    "question_id": 23,
    "question": "Q:23 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Flint 2. Flec 3. Flaw 4. Fleet 5. Flight",
    "options": [
      "1. 3, 5, 4, 2, 1",
      "2. 2, 2, 3, 4, 5, 1",
      "3. 3, 2, 4, 5, 1",
      "4. 4, 3, 4, 2, 5, 1"
    ],
    "correct_option": "3. 3, 2, 4, 5, 1",
    "explanation": "The correct answer is option 3 i.e. 3, 2, 4, 5, 1. 3. Flaw, 2. Flec, 4. Fleet, 5. Flight, 1. Flint.",
    "exam": "CPO Tier I - 05 Oct 2023 - Shift 1"
  },
  {
    "question_id": 24,
    "question": "Q:24 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Serious 2. Sermonize 3. Servant 4. Session 5. Serrated",
    "options": [
      "1. 1, 2, 5, 3, 4",
      "2. 2, 3, 5, 1, 4",
      "3. 2, 3, 5, 1, 4",
      "4. 2, 1, 5, 3, 4"
    ],
    "correct_option": "4. 2, 1, 5, 3, 4",
    "explanation": "The correct answer is option 4 i.e. 2, 1, 5, 3, 4. 2. Sermonize, 1. Serious, 5. Serrated, 3. Servant, 4. Session.",
    "exam": "CPO Tier I - 05 Oct 2023 - Shift 2"
  },
  {
    "question_id": 25,
    "question": "Q:25 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Channel 2. Chariot 3. Charcoal 4. Chapel 5. Chamber 6. Chance",
    "options": [
      "1. 5, 6, 1, 4, 3, 2",
      "2. 5, 1, 6, 4, 3, 2",
      "3. 5, 6, 4, 2, 3, 1",
      "4. 5, 6, 1, 4, 2, 3"
    ],
    "correct_option": "1. 5, 6, 1, 4, 3, 2",
    "explanation": "The correct answer is option 1 i.e. 5, 6, 1, 4, 3, 2. 5. Chamber, 6. Chance, 1. Channel, 4. Chapel, 3. Charcoal, 2. Chariot.",
    "exam": "CPO Tier I - 05 Oct 2023 - Shift 2"
  },
  {
    "question_id": 26,
    "question": "Q:26 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Stoop 2. Stoke 3. Storage 4. Stock 5. Storey 6. Stomach",
    "options": [
      "1. 4, 2, 6, 3, 1, 5",
      "2. 4, 6, 3, 1, 5, 2",
      "3. 4, 2, 6, 3, 1, 5",
      "4. 4, 2, 6, 1, 3, 5"
    ],
    "correct_option": "4. 4, 2, 6, 1, 3, 5",
    "explanation": "The correct answer is option 4 i.e. 4, 2, 6, 1, 3, 5. 4. Stock, 2. Stoke, 6. Stomach, 1. Stoop, 3. Storage, 5. Storey.",
    "exam": "CPO Tier I - 05 Oct 2023 - Shift 2"
  },
  {
    "question_id": 27,
    "question": "Q:27 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Wrist 2. Wrangle 3. Workable 4. Wrongful 5. Woodland",
    "options": [
      "1. 5, 3, 2, 1, 4",
      "2. 3, 2, 5, 1, 4",
      "3. 5, 2, 3, 1, 4",
      "4. 5, 3, 2, 1, 4"
    ],
    "correct_option": "4. 5, 3, 2, 1, 4",
    "explanation": "The correct answer is option 4 i.e. 5, 3, 2, 1, 4. 5. Woodland, 3. Workable, 2. Wrangle, 1. Wrist, 4. Wrongful.",
    "exam": "CPO Tier I - 04 Oct 2023 - Shift 3"
  },
  {
    "question_id": 28,
    "question": "Q:28 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Puritan 2. Purpose 3. Purge 4. Purgatory 5. Purify",
    "options": [
      "1. 3, 4, 5, 1, 2",
      "2. 5, 4, 3, 1, 2",
      "3. 4, 3, 5, 1, 2",
      "4. 4, 3, 5, 1, 2"
    ],
    "correct_option": "4. 4, 3, 5, 1, 2",
    "explanation": "The correct answer is option 4 i.e. 4, 3, 5, 1, 2. 4. Purgatory, 3. Purge, 5. Purify, 1. Puritan, 2. Purpose.",
    "exam": "CPO Tier I - 04 Oct 2023 - Shift 3"
  },
  {
    "question_id": 29,
    "question": "Q:29 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Realistic 2. Readily 3. Reach 4. Really 5. Reactor 6. Realize",
    "options": [
      "1. 3, 5, 1, 2, 6, 4",
      "2. 3, 5, 2, 1, 6, 4",
      "3. 3, 2, 6, 1, 5, 4",
      "4. 3, 5, 2, 1, 4, 6"
    ],
    "correct_option": "2. 3, 5, 2, 1, 6, 4",
    "explanation": "The correct answer is option 2 i.e. 3, 5, 2, 1, 6, 4. 3. Reach, 5. Reactor, 2. Readily, 1. Realistic, 6. Realize, 4. Really.",
    "exam": "CPO Tier I - 04 Oct 2023 - Shift 1"
  },
  {
    "question_id": 30,
    "question": "Q:30 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Authority 2. Automate 3. Authentic 4. Auspicious 5. Aureole",
    "options": [
      "1. 4, 5, 3, 1, 2",
      "2. 5, 3, 4, 1, 2",
      "3. 5, 4, 3, 1, 2",
      "4. 5, 4, 3, 2, 1"
    ],
    "correct_option": "3. 5, 4, 3, 1, 2",
    "explanation": "The correct answer is option 3 i.e. 5, 4, 3, 1, 2. 5. Aureole, 4. Auspicious, 3. Authentic, 1. Authority, 2. Automate.",
    "exam": "CPO Tier I - 03 Oct 2023 - Shift 2"
  },
  {
    "question_id": 31,
    "question": "Q:31 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Formal 2. Foreign 3. Forest 4. Forgotten 5. Forge 6. Forlorn",
    "options": [
      "1. 2, 3, 5, 4, 6, 1",
      "2. 2, 3, 6, 1, 5, 4",
      "3. 2, 5, 3, 4, 6, 1",
      "4. 2, 3, 5, 6, 4, 1"
    ],
    "correct_option": "3. 2, 5, 3, 4, 6, 1",
    "explanation": "The correct answer is option 3 i.e. 2, 5, 3, 4, 6, 1. 2. Foreign, 3. Forest, 5. Forge, 4. Forgotten, 6. Forlorn, 1. Formal.",
    "exam": "CPO Tier I - 03 Oct 2023 - Shift 2"
  },
  {
    "question_id": 32,
    "question": "Q:32 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Desire 2. Destination 3. Descend 4. Destructive 5. Desolate 6. Desperate",
    "options": [
      "1. 3, 1, 2, 6, 5, 4",
      "2. 2, 3, 1, 6, 5, 2, 4",
      "3. 3, 1, 5, 6, 2, 4",
      "4. 3, 1, 5, 6, 4, 2"
    ],
    "correct_option": "3. 3, 1, 5, 6, 2, 4",
    "explanation": "The correct answer is option 3 i.e. 3, 1, 5, 6, 2, 4. 3. Descend, 1. Desire, 5. Desolate, 6. Desperate, 2. Destination, 4. Destructive.",
    "exam": "CPO Tier I - 03 Oct 2023 - Shift 1"
  },
  {
    "question_id": 33,
    "question": "Q:33 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Lollipop 2. Loincloth 3. Longways 4. Logician 5. Lonely",
    "options": [
      "1. 3, 2, 1, 5, 4",
      "2. 4, 3, 1, 5, 2",
      "3. 4, 2, 1, 5, 3",
      "4. 3, 4, 1, 5, 2"
    ],
    "correct_option": "3. 4, 2, 1, 5, 3",
    "explanation": "The correct answer is option 3 i.e. 4, 2, 1, 5, 3. 4. Logician, 2. Loincloth, 1. Lollipop, 5. Lonely, 3. Longways.",
    "exam": "CPO Tier I - 03 Oct 2023 - Shift 1"
  },
  {
    "question_id": 34,
    "question": "Q:34 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Doctor 2. Doctorate 3. Docile 4. Documentary 5. Dock 6. Doctrine",
    "options": [
      "1. 3, 5, 1, 2, 6, 4",
      "2. 3, 5, 1, 6, 2, 4",
      "3. 3, 5, 2, 1, 6, 4",
      "4. 3, 4, 5, 1, 2, 6"
    ],
    "correct_option": "1. 3, 5, 1, 2, 6, 4",
    "explanation": "The correct answer is option 1 i.e. 3, 5, 1, 2, 6, 4. 3. Docile, 5. Dock, 1. Doctor, 2. Doctorate, 6. Doctrine, 4. Documentary.",
    "exam": "CPO Tier I - 04 Oct 2023 - Shift 2"
  },
  {
    "question_id": 35,
    "question": "Q:35 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Voice 2. Vocalist 3. Vivisection 4. Void 5. Vogue",
    "options": [
      "1. 3, 2, 5, 1, 4",
      "2. 5, 2, 3, 1, 4",
      "3. 3, 2, 1, 5, 4",
      "4. 4, 2, 3, 1, 5"
    ],
    "correct_option": "1. 3, 2, 5, 1, 4",
    "explanation": "The correct answer is option 1 i.e. 3, 2, 5, 1, 4. 3. Vivisection, 2. Vocalist, 5. Vogue, 1. Voice, 4. Void.",
    "exam": "CPO Tier I - 04 Oct 2023 - Shift 1"
  },
  {
    "question_id": 36,
    "question": "Q:36 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Straight 2. Strict 3. Stamp 4. Sticker 5. Streaming",
    "options": [
      "1. 3, 5, 4, 1, 2",
      "2. 4, 5, 2, 3, 1",
      "3. 3, 4, 1, 5, 2",
      "4. 4, 3, 1, 5, 2"
    ],
    "correct_option": "3. 3, 4, 1, 5, 2",
    "explanation": "The correct answer is option 3 i.e. 3, 4, 1, 5, 2. 3. Stamp, 4. Sticker, 1. Straight, 5. Streaming, 2. Strict.",
    "exam": "GD Const. - 24 Jan 2023 - Shift 2"
  },
  {
    "question_id": 37,
    "question": "Q:37 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Mountain 2. Mould 3. Monster 4. Mouth 5. Moving",
    "options": [
      "1. 2, 3, 1, 4, 5",
      "2. 3, 2, 1, 4, 5",
      "3. 3, 1, 2, 4, 5",
      "4. 4, 3, 2, 1, 5"
    ],
    "correct_option": "2. 3, 2, 1, 4, 5",
    "explanation": "The correct answer is option 2 i.e. 3, 2, 1, 4, 5. 3. Monster, 2. Mould, 1. Mountain, 4. Mouth, 5. Moving.",
    "exam": "GD Const. - 16 Jan 2023 - Shift 2"
  },
  {
    "question_id": 38,
    "question": "Q:38 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Universe 2. Unicorn 3. Understood 4. Unhappy 5. Uniform",
    "options": [
      "1. 3, 4, 2, 5, 1",
      "2. 3, 4, 5, 2, 1",
      "3. 3, 2, 1, 5, 4",
      "4. 4, 3, 2, 1, 5"
    ],
    "correct_option": "1. 3, 4, 2, 5, 1",
    "explanation": "The correct answer is option 1 i.e. 3, 4, 2, 5, 1. 3. Understood, 4. Unhappy, 2. Unicorn, 5. Uniform, 1. Universe.",
    "exam": "GD Const. - 1 Feb 2023 - Shift 2"
  },
  {
    "question_id": 39,
    "question": "Q:39 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. FAWN 2. FAVOUR 3. FATHER 4. FATIGUE 5. FAT 6. FATE",
    "options": [
      "1. 5, 3, 6, 4, 1, 2",
      "2. 2, 6, 3, 4, 5, 1",
      "3. 5, 6, 3, 4, 2, 1",
      "4. 6, 4, 3, 2, 1, 5"
    ],
    "correct_option": "3. 5, 6, 3, 4, 2, 1",
    "explanation": "The correct answer is option 3 i.e. 5, 6, 3, 4, 2, 1. 5. FAT, 6. FATE, 3. FATHER, 4. FATIGUE, 2. FAVOUR, 1. FAWN.",
    "exam": "GD Const. - 23 Jan 2023 - Shift 1"
  },
  {
    "question_id": 40,
    "question": "Q:40 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Elegant 2. Emerald 3. Elaborate 4. Elasticity 5. Elephant",
    "options": [
      "1. 3, 4, 5, 1, 2",
      "2. 3, 4, 1, 5, 2",
      "3. 4, 3, 2, 1, 5",
      "4. 4, 3, 1, 5, 2"
    ],
    "correct_option": "2. 3, 4, 1, 5, 2",
    "explanation": "The correct answer is option 2 i.e. 3, 4, 1, 5, 2. 3. Elaborate, 4. Elasticity, 1. Elegant, 5. Elephant, 2. Emerald.",
    "exam": "GD Const. - 24 Jan 2023 - Shift 1"
  },
  {
    "question_id": 41,
    "question": "Q:41 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Book 2. Bowl 3. Board 4. Boundary 5. Botanical",
    "options": [
      "1. 1, 2, 3, 4, 5",
      "2. 2, 3, 1, 5, 4",
      "3. 1, 3, 5, 4, 2",
      "4. 3, 4, 2, 1, 5"
    ],
    "correct_option": "3. 1, 3, 5, 4, 2",
    "explanation": "The correct answer is option 3 i.e. 1, 3, 5, 4, 2. 1. Book, 3. Board, 5. Botanical, 4. Boundary, 2. Bowl.",
    "exam": "GD Const. - 24 Jan 2023 - Shift 1"
  },
  {
    "question_id": 42,
    "question": "Q:42 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Vehicle 2. Verify 3. Vegan 4. Venom 5. Vein",
    "options": [
      "1. 3, 1, 4, 2, 5",
      "2. 3, 1, 5, 4, 2",
      "3. 3, 5, 1, 4, 2",
      "4. 4, 2, 1, 3, 5"
    ],
    "correct_option": "2. 3, 1, 5, 4, 2",
    "explanation": "The correct answer is option 2 i.e. 3, 1, 5, 4, 2. 3. Vegan, 1. Vehicle, 5. Vein, 4. Venom, 2. Verify.",
    "exam": "GD Const. - 23 Jan 2023 - Shift 4"
  },
  {
    "question_id": 43,
    "question": "Q:43 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Pillow 2. Pile 3. Pint 4. Picked 5. Pickle",
    "options": [
      "1. 3, 4, 2, 1, 5",
      "2. 4, 5, 2, 1, 3",
      "3. 4, 2, 1, 3, 5",
      "4. 4, 5, 1, 2, 3"
    ],
    "correct_option": "2. 4, 5, 2, 1, 3",
    "explanation": "The correct answer is option 2 i.e. 4, 5, 2, 1, 3. 4. Picked, 5. Pickle, 2. Pile, 1. Pillow, 3. Pint.",
    "exam": "GD Const. - 23 Jan 2023 - Shift 3"
  },
  {
    "question_id": 44,
    "question": "Q:44 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Dream 2. Drown 3. Drone 4. Dropped 5. Drama",
    "options": [
      "1. 5, 4, 2, 1, 3",
      "2. 4, 5, 2, 1, 3",
      "3. 5, 1, 3, 4, 2",
      "4. 5, 1, 4, 3, 2"
    ],
    "correct_option": "4. 5, 1, 4, 3, 2",
    "explanation": "The correct answer is option 4 i.e. 5, 1, 4, 3, 2. 5. Drama, 1. Dream, 4. Dropped, 3. Drone, 2. Drown.",
    "exam": "GD Const. - 12 Jan 2023 - Shift 4"
  },
  {
    "question_id": 45,
    "question": "Q:45 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Track 2. Trace 3. Trade 4. Treasure 5. Triangle",
    "options": [
      "1. 5, 2, 3, 1, 4",
      "2. 2, 1, 3, 4, 5",
      "3. 5, 4, 3, 1, 2",
      "4. 4, 5, 1, 3, 2"
    ],
    "correct_option": "2. 2, 1, 3, 4, 5",
    "explanation": "The correct answer is option 2 i.e. 2, 1, 3, 4, 5. 2. Trace, 1. Track, 3. Trade, 4. Treasure, 5. Triangle.",
    "exam": "GD Const. - 16 Jan 2023 - Shift 4"
  },
  {
    "question_id": 46,
    "question": "Q:46 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Jumping 2. Juice 3. Jumble 4. Jupiter 5. Junior",
    "options": [
      "1. 3, 2, 1, 4, 5",
      "2. 2, 3, 1, 5, 4",
      "3. 2, 1, 3, 4, 5",
      "4. 3, 4, 1, 2, 5"
    ],
    "correct_option": "2. 2, 3, 1, 5, 4",
    "explanation": "The correct answer is option 2 i.e. 2, 3, 1, 5, 4. 2. Juice, 3. Jumble, 1. Jumping, 5. Junior, 4. Jupiter.",
    "exam": "GD Const. - 17 Jan 2023 - Shift 1"
  },
  {
    "question_id": 47,
    "question": "Q:47 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Tasty 2. Tackle 3. Tamarind 4. Tadpole 5. Tagline",
    "options": [
      "1. 2, 3, 4, 1, 5",
      "2. 4, 3, 2, 1, 5",
      "3. 2, 4, 5, 3, 1",
      "4. 2, 4, 3, 5, 1"
    ],
    "correct_option": "3. 2, 4, 5, 3, 1",
    "explanation": "The correct answer is option 3 i.e. 2, 4, 5, 3, 1. 2. Tackle, 4. Tadpole, 5. Tagline, 3. Tamarind, 1. Tasty.",
    "exam": "GD Const. - 13 Jan 2023 - Shift 1"
  },
  {
    "question_id": 48,
    "question": "Q:48 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Chair 2. Chain 3. Charm 4. Charge 5. Charcoal",
    "options": [
      "1. 2, 1, 5, 4, 3",
      "2. 1, 2, 3, 4, 5",
      "3. 2, 4, 1, 3, 5",
      "4. 2, 3, 1, 4, 5"
    ],
    "correct_option": "1. 2, 1, 5, 4, 3",
    "explanation": "The correct answer is option 1 i.e. 2, 1, 5, 4, 3. 2. Chain, 1. Chair, 5. Charcoal, 4. Charge, 3. Charm.",
    "exam": "GD Const. - 11 Jan 2023 - Shift 3"
  },
  {
    "question_id": 49,
    "question": "Q:49 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Peanut 2. Peasant 3. Peacock 4. Peach 5. Pencil",
    "options": [
      "1. 4, 3, 5, 1, 2",
      "2. 3, 4, 5, 1, 2",
      "3. 4, 1, 2, 5, 3",
      "4. 4, 3, 1, 2, 5"
    ],
    "correct_option": "4. 4, 3, 1, 2, 5",
    "explanation": "The correct answer is option 4 i.e. 4, 3, 1, 2, 5. 4. Peach, 3. Peacock, 1. Peanut, 2. Peasant, 5. Pencil.",
    "exam": "GD Const. - 12 Jan 2023 - Shift 2"
  },
  {
    "question_id": 50,
    "question": "Q:50 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Kind 2. Kite 3. Knit 4. King 5. Kindle",
    "options": [
      "1. 1, 5, 4, 2, 3",
      "2. 1, 4, 2, 5, 3",
      "3. 1, 5, 2, 4, 3",
      "4. 1, 4, 5, 2, 3"
    ],
    "correct_option": "1. 1, 5, 4, 2, 3",
    "explanation": "The correct answer is option 1 i.e. 1, 5, 4, 2, 3. 1. Kind, 5. Kindle, 4. King, 2. Kite, 3. Knit.",
    "exam": "GD Const. - 11 Jan 2023 - Shift 1"
  },
  {
    "question_id": 51,
    "question": "Q:51 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Inside 2. Inertia 3. Instruction 4. Insight 5. Individual",
    "options": [
      "1. 5, 3, 1, 2, 4",
      "2. 5, 2, 1, 4, 3",
      "3. 5, 1, 2, 3, 4",
      "4. 5, 1, 3, 4, 2"
    ],
    "correct_option": "2. 5, 2, 1, 4, 3",
    "explanation": "The correct answer is option 2 i.e. 5, 2, 1, 4, 3. 5. Individual, 2. Inertia, 1. Inside, 4. Insight, 3. Instruction.",
    "exam": "GD Const. - 10 Jan 2023 - Shift 4"
  },
  {
    "question_id": 52,
    "question": "Q:52 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Manner 2. Manage 3. Masculine 4. Magic 5. Matter",
    "options": [
      "1. 1, 2, 4, 3, 5",
      "2. 4, 1, 2, 3, 5",
      "3. 4, 2, 1, 3, 5",
      "4. 4, 2, 1, 5, 3"
    ],
    "correct_option": "3. 4, 2, 1, 3, 5",
    "explanation": "The correct answer is option 3 i.e. 4, 2, 1, 3, 5. 4. Magic, 2. Manage, 1. Manner, 3. Masculine, 5. Matter.",
    "exam": "GD Const. - 10 Jan 2023 - Shift 1"
  },
  {
    "question_id": 53,
    "question": "Q:53 Which option represents the correct order of the given words as they would appear in the English dictionary? 1. Lonely 2. Longitude 3. Lovely 4. Lounge 5. Locker",
    "options": [
      "1. 5, 1, 2, 3, 4",
      "2. 5, 2, 1, 3, 4",
      "3. 5, 1, 2, 4, 3",
      "4. 5, 4, 3, 1, 2"
    ],
    "correct_option": "3. 5, 1, 2, 4, 3",
    "explanation": "The correct answer is option 3 i.e. 5, 1, 2, 4, 3. 5. Locker, 1. Lonely, 2. Longitude, 4. Lounge, 3. Lovely.",
    "exam": "GD Const. - 10 Jan 2023 - Shift 2"
  },
  {
    "question_id": 54,
    "question": "Q:54 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Expensive 2. Expedition 3. Experience 4. Expel 5. Expenditure",
    "options": [
      "1. 2, 4, 5, 1, 3",
      "2. 2, 4, 5, 3, 1",
      "3. 2, 5, 1, 4, 3",
      "4. 4, 2, 5, 1, 3"
    ],
    "correct_option": "1. 2, 4, 5, 1, 3",
    "explanation": "The correct answer is option 1 i.e. 2, 4, 5, 1, 3. 2. Expedition, 4. Expel, 5. Expenditure, 1. Expensive, 3. Experience.",
    "exam": "CGL - 03 Dec 2022 - Shift 1"
  },
  {
    "question_id": 55,
    "question": "Q:55 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Miscellaneous 2. Miscalculate 3. Mischance 4. Miscall 5. Miscasting",
    "options": [
      "1. 2, 4, 1, 5, 3",
      "2. 2, 4, 5, 1, 3",
      "3. 4, 2, 5, 3, 1",
      "4. 4, 2, 5, 1, 3"
    ],
    "correct_option": "2. 2, 4, 5, 1, 3",
    "explanation": "The correct answer is option 2 i.e. 2, 4, 5, 1, 3. 2. Miscalculate, 4. Miscall, 5. Miscasting, 1. Miscellaneous, 3. Mischance.",
    "exam": "CGL - 06 Dec 2022 - Shift 2"
  },
  {
    "question_id": 56,
    "question": "Q:56 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Pardoner 2. Parenthetical 3. Parental 4. Pardon 5. Parenthesis",
    "options": [
      "1. 1, 4, 3, 2, 5",
      "2. 4, 1, 3, 2, 5",
      "3. 4, 1, 3, 5, 2",
      "4. 1, 4, 3, 5, 2"
    ],
    "correct_option": "3. 4, 1, 3, 5, 2",
    "explanation": "The correct answer is option 3 i.e. 4, 1, 3, 5, 2. 4. Pardon, 1. Pardoner, 3. Parenthesis, 5. Parental, 2. Parenthetical.",
    "exam": "CGL - 03 Dec 2022 - Shift 3"
  },
  {
    "question_id": 57,
    "question": "Q:57 After arranging the given words according to dictionary order, which word will come at the 'Third' position? 1. Oblivion 2. Oblique 3. Oblige 4. Oblate 5. Oblong",
    "options": [
      "1. Oblate",
      "2. Oblique",
      "3. Oblige",
      "4. Oblivion"
    ],
    "correct_option": "2. Oblique",
    "explanation": "The correct answer is option 2 i.e. Oblique. The correct dictionary order is: 1. Oblate, 2. Oblige, 3. Oblique, 4. Oblivion, 5. Oblong.",
    "exam": "CGL - 06 Dec 2022 - Shift 3"
  },
  {
    "question_id": 58,
    "question": "Q:58 After arranging the given words according to dictionary order, which word will come at the 'Third' position? 1. Chocolate 2. Chocoholic 3. Chocolaty 4. Chocolatier 5. Chock",
    "options": [
      "1. Chocolate",
      "2. Chock",
      "3. Chocolatier",
      "4. Chocoholic"
    ],
    "correct_option": "1. Chocolate",
    "explanation": "The correct answer is option 1 i.e. Chocolate. The correct dictionary order is: 1. Chock, 2. Chocoholic, 3. Chocolate, 4. Chocolatier, 5. Chocolaty.",
    "exam": "CGL - 06 Dec 2022 - Shift 4"
  },
  {
    "question_id": 59,
    "question": "Q:59 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Humility 2. Humbug 3. Humanoid 4. Humidity 5. Humoresque 6. Humanity 7. Humectants",
    "options": [
      "1. 6, 3, 2, 7, 4, 1, 5",
      "2. 6, 3, 2, 7, 1, 4, 5",
      "3. 6, 3, 7, 2, 1, 4, 5",
      "4. 6, 3, 7, 2, 4, 1, 5"
    ],
    "correct_option": "1. 6, 3, 2, 7, 4, 1, 5",
    "explanation": "The correct answer is option 1 i.e. 6, 3, 2, 7, 4, 1, 5. 6. Humanity, 3. Humanoid, 2. Humbug, 7. Humectants, 4. Humidity, 1. Humility, 5. Humoresque.",
    "exam": "CGL - 05 Dec 2022 - Shift 3"
  },
  {
    "question_id": 60,
    "question": "Q:60 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Accusable 2. Acerbity 3. Accursed 4. Acetify 5. Accuser",
    "options": [
      "1. 3, 1, 5, 4, 2",
      "2. 1, 3, 5, 2, 4",
      "3. 3, 1, 5, 2, 4",
      "4. 1, 3, 5, 4, 2"
    ],
    "correct_option": "3. 3, 1, 5, 2, 4",
    "explanation": "The correct answer is option 3 i.e. 3, 1, 5, 2, 4. The dictionary order is: 3. Accursed, 1. Accusable, 5. Accuser, 2. Acerbity, 4. Acetify.",
    "exam": "CGL - 05 Dec 2022 - Shift 2"
  },
  {
    "question_id": 61,
    "question": "Q:61 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Sennet 2. Sennight 3. Sennit 4. Seniority 5. Senna",
    "options": [
      "1. 4, 5, 2, 1, 3",
      "2. 5, 4, 2, 1, 3",
      "3. 4, 5, 1, 3, 2",
      "4. 4, 5, 1, 2, 3"
    ],
    "correct_option": "4. 4, 5, 1, 2, 3",
    "explanation": "The correct answer is Option 4 i.e. 4, 5, 1, 2, 3. The correct dictionary order is: 4- Seniority, 5- Senna, 1- Sennet, 2- Sennight, 3- Sennit.",
    "exam": "CGL - 05 Dec 2022 - Shift 1"
  },
  {
    "question_id": 62,
    "question": "Q:62 After arranging the given words according to dictionary order, which word will come at the 'Third' position? 1. Sickle 2. Sick 3. Sickly 4. Sicken 5. Sickness",
    "options": [
      "1. Sick",
      "2. Sickle",
      "3. Sicken",
      "4. Sickly"
    ],
    "correct_option": "2. Sickle",
    "explanation": "The correct answer is Option 2 i.e. Sickle. The dictionary order is: 1. Sick, 2. Sicken, 3. Sickle, 4. Sickly, 5. Sickness.",
    "exam": "CGL - 02 Dec 2022 - Shift 3"
  },
  {
    "question_id": 63,
    "question": "Q:63 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1- Kinglet 2- Kingship 3- Kingdom 4- Kinsfolk 5- Kingly",
    "options": [
      "1. 1, 3, 2, 5, 4",
      "2. 3, 1, 2, 5, 4",
      "3. 1, 3, 5, 2, 4",
      "4. 3, 1, 5, 2, 4"
    ],
    "correct_option": "4. 3, 1, 5, 2, 4",
    "explanation": "The correct answer is Option 4 i.e. 3, 1, 5, 2, 4. The correct order is: 3- Kingdom, 1- Kinglet, 5- Kingly, 2- Kingship, 4- Kinsfolk.",
    "exam": "CGL - 02 Dec 2022 - Shift 4"
  },
  {
    "question_id": 64,
    "question": "Q:64 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1- Laudanum 2- Lattice 3- Laudation 4- Latterly 5- Laudable",
    "options": [
      "1. 2, 4, 5, 3, 1",
      "2. 2, 4, 1, 5, 3",
      "3. 4, 2, 5, 1, 3",
      "4. 4, 2, 5, 3, 1"
    ],
    "correct_option": "3. 4, 2, 5, 1, 3",
    "explanation": "The correct answer is Option 3 i.e. 4, 2, 5, 1, 3. The correct order is: 4- Latterly, 2- Lattice, 5- Laudable, 1- Laudanum, 3- Laudation.",
    "exam": "CGL - 02 Dec 2022 - Shift 1"
  },
  {
    "question_id": 65,
    "question": "Q:65 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Inundate 2. Invidious 3. Individual 4. Inveterate 5. Invective 6. Invincible 7. Inviolable",
    "options": [
      "1. 1, 5, 4, 2, 3, 6, 7",
      "2. 1, 5, 3, 4, 2, 6, 7",
      "3. 3, 1, 5, 4, 2, 6, 7",
      "4. 3, 1, 5, 4, 6, 2, 7"
    ],
    "correct_option": "3. 3, 1, 5, 4, 2, 6, 7",
    "explanation": "The correct answer is Option 3 i.e. 3, 1, 5, 4, 2, 6, 7. The dictionary order is: 3- Individual, 1- Inundate, 5- Invective, 4- Inveterate, 2- Invidious, 6- Invincible, 7- Inviolable.",
    "exam": "CGL - 01 Dec 2022 - Shift 4"
  },
  {
    "question_id": 66,
    "question": "Q:66 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Fustian 2. Funerary 3. Fusion 4. Funicular 5. Fuscous 6. Fundament 7. Fuselage",
    "options": [
      "1. 6, 2, 5, 7, 3, 4, 1",
      "2. 6, 2, 5, 7, 4, 1, 3",
      "3. 6, 2, 4, 5, 7, 3, 1",
      "4. 6, 2, 5, 4, 7, 3, 1"
    ],
    "correct_option": "3. 6, 2, 4, 5, 7, 3, 1",
    "explanation": "The correct answer is Option 3 i.e. 6, 2, 4, 5, 7, 3, 1. The sequence is: 6- Fundament, 2- Funerary, 4- Funicular, 5- Fuscous, 7- Fuselage, 3- Fusion, 1- Fustian.",
    "exam": "CGL - 02 Dec 2022 - Shift 2"
  },
  {
    "question_id": 67,
    "question": "Q:67 After arranging the given words according to dictionary order, which word will come at the 'Fifth' position? 1. Popular 2. Population 3. Populace 4. Pope 5. Poppy",
    "options": [
      "1. Population",
      "2. Poppy",
      "3. Populace",
      "4. Popular"
    ],
    "correct_option": "1. Population",
    "explanation": "The correct answer is Option 1 i.e. Population. The dictionary order is: 4. Pope, 5. Poppy, 3. Populace, 1. Popular, 2. Population.",
    "exam": "CGL - 01 Dec 2022 - Shift 1"
  },
  {
    "question_id": 68,
    "question": "Q:68 After arranging the given words according to dictionary order, which word will come at the 'Fourth' position? 1. Unseen 2. Unsafe 3. Unseam 4. Unsound 5. Unsay",
    "options": [
      "1. Unseen",
      "2. Unsay",
      "3. Unseam",
      "4. Unsound"
    ],
    "correct_option": "1. Unseen",
    "explanation": "The correct answer is Option 1 i.e. Unseen. The dictionary order is: 3. Unsafe, 5. Unsay, 2. Unseam, 1. Unseen, 4. Unsound. The fourth word is Unseen.",
    "exam": "CGL - 01 Dec 2022 - Shift 2"
  },
  {
    "question_id": 69,
    "question": "Q:69 After arranging the given words according to dictionary order, which word will come at the 'Fifth' position? 1. Version 2. Versus 3. Versicolour 4. Verse 5. Verso",
    "options": [
      "1. Verso",
      "2. Versus",
      "3. Version",
      "4. Verse"
    ],
    "correct_option": "2. Versus",
    "explanation": "The correct answer is Option 2 i.e. Versus. The dictionary order is: 1. Verse, 2. Versicolour, 3. Version, 4. Verso, 5. Versus. The fifth word is Versus.",
    "exam": "CGL - 03 Dec 2022 - Shift 2"
  },
  {
    "question_id": 70,
    "question": "Q:70 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Lesage 2. Laudatory 3. Laureate 4. Latitude 5. Legacy 6. Laudanum 7. Launder",
    "options": [
      "1. 4, 6, 7, 3, 2, 1, 5",
      "2. 4, 6, 7, 2, 3, 1, 5",
      "3. 4, 6, 2, 7, 3, 5, 1",
      "4. 4, 6, 2, 3, 7, 1, 5"
    ],
    "correct_option": "3. 4, 6, 2, 7, 3, 5, 1",
    "explanation": "The correct answer is Option 3 i.e. 4, 6, 2, 7, 3, 5, 1. The order is: 4. Latitude, 6. Laudanum, 2. Laudatory, 7. Launder, 3. Laureate, 5. Legacy, 1. Lesage.",
    "exam": "CGL - 03 Dec 2022 - Shift 4"
  },
  {
    "question_id": 71,
    "question": "Q:71 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Speaking 2. Standardize 3. Southern 4. Stampede 5. Spacious 6. Sovereignty",
    "options": [
      "1. 3, 4, 6, 5, 1, 2",
      "2. 3, 6, 5, 1, 4, 2",
      "3. 3, 6, 2, 4, 1, 5",
      "4. 3, 2, 6, 1, 4, 5"
    ],
    "correct_option": "2. 3, 6, 5, 1, 4, 2",
    "explanation": "The correct answer is Option 2 i.e. 3, 6, 5, 1, 4, 2. The order is: 3. Southern, 6. Sovereignty, 5. Spacious, 1. Speaking, 4. Stampede, 2. Standardize.",
    "exam": "CGL - 19 April 2022 - Shift 2"
  },
  {
    "question_id": 72,
    "question": "Q:72 Select the correct option that indicates the arrangement of the given words in a logical and meaningful order. 1. Treatment 2. Recovery 3. Virus 4. Symptoms 5. Infection",
    "options": [
      "1. 3, 5, 4, 2, 1",
      "2. 3, 5, 4, 1, 2",
      "3. 2, 5, 1, 4, 5",
      "4. 4, 5, 3, 1, 2"
    ],
    "correct_option": "2. 3, 5, 4, 1, 2",
    "explanation": "The correct answer is Option 2 i.e. 3, 5, 4, 1, 2. The logical order is: 3. Virus, 5. Infection, 4. Symptoms, 1. Treatment, 2. Recovery.",
    "exam": "CGL - 13 April 2022 - Shift 3"
  },
  {
    "question_id": 73,
    "question": "Q:73 After arranging the given words according to dictionary order, which word will come at the 'Third' position? 1. Series 2. Serious 3. Serein 4. Serial 5. Serried",
    "options": [
      "1. Series",
      "2. Serein",
      "3. Serial",
      "4. Serious"
    ],
    "correct_option": "1. Series",
    "explanation": "The correct answer is Option 1 i.e. Series. The order is: 1. Serein, 2. Serial, 3. Series, 4. Serious, 5. Serried. The third word is Series.",
    "exam": "CGL - 06 Dec 2022 - Shift 1"
  },
  {
    "question_id": 74,
    "question": "Q:74 Select the correct option that indicates the arrangement of the given words in a logical and meaningful order. 1. Recording 2. Rehearsal 3. Viewers 4. Script 5. Video Editing",
    "options": [
      "1. 4, 5, 2, 1, 3",
      "2. 4, 1, 2, 3, 5",
      "3. 4, 2, 1, 5, 3",
      "4. 2, 4, 1, 5, 3"
    ],
    "correct_option": "3. 4, 2, 1, 5, 3",
    "explanation": "The correct answer is Option 3 i.e. 4, 2, 1, 5, 3. The logical order is: 4. Script, 2. Rehearsal, 1. Recording, 5. Video Editing, 3. Viewers.",
    "exam": "CGL - 19 April 2022 - Shift 3"
  },
  {
    "question_id": 75,
    "question": "Q:75 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Malice 2. Malignant 3. Mallows 4. Malfunction 5. Malware",
    "options": [
      "1. 4, 1, 2, 5, 3",
      "2. 4, 1, 2, 3, 5",
      "3. 1, 4, 3, 2, 5",
      "4. 4, 2, 1, 3, 5"
    ],
    "correct_option": "2. 4, 1, 2, 3, 5",
    "explanation": "The correct answer is Option 2 i.e. 4, 1, 2, 3, 5. The dictionary order is: 4. Malfunction, 1. Malice, 2. Malignant, 3. Mallows, 5. Malware.",
    "exam": "CGL - 21 April 2022 - Shift 2"
  },
  {
    "question_id": 76,
    "question": "Q:76 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Photographic 2. Photocopier 3. Photography 4. Photographer 5. Photocopy",
    "options": [
      "1. 1, 2, 3, 4, 5",
      "2. 3, 5, 1, 4, 2",
      "3. 2, 5, 4, 1, 3",
      "4. 4, 1, 5, 3, 2"
    ],
    "correct_option": "3. 2, 5, 4, 1, 3",
    "explanation": "The correct answer is option 3 i.e. 2, 5, 4, 1, 3. 2. Photocopier, 5. Photocopy, 4. Photographer, 1. Photographic, 3. Photography.",
    "exam": "CGL - 21 April 2022 - Shift 3"
  },
  {
    "question_id": 77,
    "question": "Q:77 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Serenity 2. Serpent 3. Serviceable 4. Sericulture 5. Serotonin",
    "options": [
      "1. 1, 4, 5, 2, 3",
      "2. 2, 4, 5, 3, 1",
      "3. 3, 4, 5, 2, 1",
      "4. 1, 4, 2, 5, 3"
    ],
    "correct_option": "1. 1, 4, 5, 2, 3",
    "explanation": "The correct answer is option 1 i.e. 1, 4, 5, 2, 3. 1. Serenity, 4. Sericulture, 5. Serotonin, 2. Serpent, 3. Serviceable.",
    "exam": "CGL - 21 April 2022 - Shift 1"
  },
  {
    "question_id": 78,
    "question": "Q:78 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Pediculate 2. Pandemonium 3. Pancytopenia 4. Panelist 5. Panegyric",
    "options": [
      "1. 2, 3, 5, 4, 1",
      "2. 3, 2, 5, 4, 1",
      "3. 1, 3, 2, 5, 4",
      "4. 3, 2, 4, 5, 1"
    ],
    "correct_option": "2. 3, 2, 5, 4, 1",
    "explanation": "The correct answer is option 2 i.e. 3, 2, 5, 4, 1. 3. Pancytopenia, 2. Pandemonium, 5. Panegyric, 4. Panelist, 1. Pediculate.",
    "exam": "CGL - 20 April 2022 - Shift 1"
  },
  {
    "question_id": 79,
    "question": "Q:79 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Disaster 2. Disappointment 3. Discharge 4. Disappear 5. Disadvantage 6. Disarticulate",
    "options": [
      "1. 5, 4, 2, 1, 6, 3",
      "2. 5, 2, 4, 6, 1, 3",
      "3. 5, 2, 4, 1, 6, 3",
      "4. 5, 4, 2, 6, 1, 3"
    ],
    "correct_option": "3. 5, 2, 4, 1, 6, 3",
    "explanation": "The correct answer is option 3 i.e. 5, 2, 4, 1, 6, 3. 5. Disadvantage, 2. Disappointment, 4. Disappear, 1. Disaster, 6. Disarticulate, 3. Discharge.",
    "exam": "CGL - 20 April 2022 - Shift 2"
  },
  {
    "question_id": 80,
    "question": "Q:80 Select the correct option that indicates the arrangement of the given words in a logical and meaningful order. 1. Displaying 2. Sketching 3. Colouring 4. Framing",
    "options": [
      "1. 4, 3, 1, 2",
      "2. 2, 1, 4, 3",
      "3. 2, 3, 4, 1",
      "4. 3, 4, 2, 1"
    ],
    "correct_option": "3. 2, 3, 4, 1",
    "explanation": "The correct answer is option 3 i.e. 2, 3, 4, 1. The logical order is: 2. Sketching, 3. Colouring, 4. Framing, 1. Displaying.",
    "exam": "CGL - 13 April 2022 - Shift 2"
  },
  {
    "question_id": 81,
    "question": "Q:81 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Likelihood 2. Likenesses 3. Likewise 4. Likens 5. Likeliest",
    "options": [
      "1. 5, 1, 2, 4, 3",
      "2. 5, 1, 2, 3, 4",
      "3. 1, 4, 2, 3, 5",
      "4. 5, 1, 4, 2, 3"
    ],
    "correct_option": "1. 5, 1, 2, 4, 3",
    "explanation": "The correct answer is option 1 i.e. 5, 1, 2, 4, 3. 5. Likeliest, 1. Likelihood, 2. Likenesses, 4. Likens, 3. Likewise.",
    "exam": "CGL - 18 April 2022 - Shift 3"
  },
  {
    "question_id": 82,
    "question": "Q:82 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Minor 2. Melody 3. Memory 4. Malicious 5. Majesty",
    "options": [
      "1. 5, 4, 2, 1, 3",
      "2. 5, 4, 2, 3, 1",
      "3. 5, 4, 1, 2, 3",
      "4. 5, 4, 3, 2, 1"
    ],
    "correct_option": "2. 5, 4, 2, 3, 1",
    "explanation": "The correct answer is option 2 i.e. 5, 4, 2, 3, 1. 5. Majesty, 4. Malicious, 2. Melody, 3. Memory, 1. Minor.",
    "exam": "CGL - 12 April 2022 - Shift 3"
  },
  {
    "question_id": 83,
    "question": "Q:83 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Magnetic 2. Magnify 3. Magnet 4. Magical 5. Majesty",
    "options": [
      "1. 4, 3, 2, 1, 5",
      "2. 4, 3, 1, 2, 5",
      "3. 4, 1, 3, 2, 5",
      "4. 3, 1, 4, 2, 5"
    ],
    "correct_option": "3. 4, 1, 3, 2, 5",
    "explanation": "The correct answer is option 3 i.e. 4, 1, 3, 2, 5. 4. Magical, 1. Magnetic, 3. Magnet, 2. Magnify, 5. Majesty.",
    "exam": "CGL - 13 April 2022 - Shift 1"
  },
  {
    "question_id": 84,
    "question": "Q:84 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Projection 2. Professor 3. Product 4. Pronounce 5. Provide",
    "options": [
      "1. 2, 3, 1, 5, 4",
      "2. 3, 2, 1, 5, 4",
      "3. 3, 2, 4, 1, 5",
      "4. 3, 2, 1, 4, 5"
    ],
    "correct_option": "4. 3, 2, 1, 4, 5",
    "explanation": "The correct answer is option 4 i.e. 3, 2, 1, 4, 5. 3. Product, 2. Professor, 1. Projection, 4. Pronounce, 5. Provide.",
    "exam": "CGL - 18 April 2022 - Shift 2"
  },
  {
    "question_id": 85,
    "question": "Q:85 Select the correct option that indicates the arrangement of the given words in a logical and meaningful order. 1. Chapter list 2. Bibliography 3. Preface 4. Cover page 5. Chapters",
    "options": [
      "1. 4, 3, 1, 5, 2",
      "2. 4, 3, 5, 1, 2",
      "3. 4, 5, 3, 1, 2",
      "4. 3, 5, 4, 2, 1"
    ],
    "correct_option": "1. 4, 3, 1, 5, 2",
    "explanation": "The correct answer is option 1 i.e. 4, 3, 1, 5, 2. 4. Cover page, 3. Preface, 1. Chapter list, 5. Chapters, 2. Bibliography.",
    "exam": "CGL - 12 April 2022 - Shift 2"
  },
  {
    "question_id": 86,
    "question": "Q:86 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Hatchability 2. Hatchel 3. Hatchers 4. Hatchback 5. Hatchings",
    "options": [
      "1. 4, 1, 2, 3, 5",
      "2. 4, 1, 2, 5, 3",
      "3. 1, 4, 2, 5, 3",
      "4. 1, 4, 2, 3, 5"
    ],
    "correct_option": "1. 4, 1, 2, 3, 5",
    "explanation": "The correct answer is option 1 i.e. 4, 1, 2, 3, 5. 4. Hatchback, 1. Hatchability, 2. Hatchel, 3. Hatchers, 5. Hatchings.",
    "exam": "CGL - 19 April 2022 - Shift 1"
  },
  {
    "question_id": 87,
    "question": "Q:87 Select the correct option that indicates the arrangement of the given words in a logical and meaningful order. 1. Starfish 2. Blue whale 3. Shark 4. Giant tortoise 5. Penguin",
    "options": [
      "1. 1, 5, 3, 2, 4",
      "2. 4, 5, 1, 3, 2",
      "3. 1, 5, 4, 3, 2",
      "4. 1, 5, 4, 2, 3"
    ],
    "correct_option": "3. 1, 5, 4, 3, 2",
    "explanation": "The correct answer is option 3 i.e. 1, 5, 4, 3, 2. 1. Starfish, 5. Penguin, 4. Giant tortoise, 3. Shark, 2. Blue whale.",
    "exam": "CGL - 11 April 2022 - Shift 2"
  },
  {
    "question_id": 88,
    "question": "Q:88 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Junketeered 2. Junction 3. Junketers 4. Junketeering 5. Junctures",
    "options": [
      "1. 2, 5, 1, 4, 3",
      "2. 2, 5, 3, 1, 4",
      "3. 1, 4, 2, 3, 5",
      "4. 2, 5, 4, 3, 1"
    ],
    "correct_option": "1. 2, 5, 1, 4, 3",
    "explanation": "The correct answer is option 1 i.e. 2, 5, 1, 4, 3. 2. Junction, 5. Junctures, 1. Junketeered, 4. Junketeering, 3. Junketers.",
    "exam": "CGL - 11 April 2022 - Shift 3"
  },
  {
    "question_id": 89,
    "question": "Q:89 Select the correct option that indicates the arrangement of the given course of action in a logical and meaningful order. 1. Open email account 2. Compose email 3. Start computer 4. Enter email address 5. Write the content 6. Send the mail",
    "options": [
      "1. 3, 2, 6, 1, 5, 4",
      "2. 3, 1, 2, 4, 5, 6",
      "3. 2, 3, 1, 5, 4, 6",
      "4. 3, 2, 5, 1, 4, 6"
    ],
    "correct_option": "2. 3, 1, 2, 4, 5, 6",
    "explanation": "The correct answer is option 2 i.e. 3, 1, 2, 4, 5, 6. The logical sequence of sending an email is: 3. Start computer, 1. Open email account, 2. Compose email, 4. Enter email address, 5. Write the content, 6. Send the mail.",
    "exam": "CGL - 12 April 2022 - Shift 1"
  },
  {
    "question_id": 90,
    "question": "Q:90 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Tranquil 2. Transit 3. Transfer 4. Transient 5. Training",
    "options": [
      "1. 5, 1, 3, 4, 2",
      "2. 5, 1, 4, 3, 2",
      "3. 5, 1, 3, 2, 4",
      "4. 2, 5, 3, 4, 1"
    ],
    "correct_option": "1. 5, 1, 3, 4, 2",
    "explanation": "The correct answer is option 1 i.e. 5, 1, 3, 4, 2. 5. Training, 1. Tranquil, 3. Transfer, 4. Transient, 2. Transit.",
    "exam": "CGL - 20 April 2022 - Shift 3"
  },
  {
    "question_id": 91,
    "question": "Q:91 Select the correct option that indicates the arrangement of the given words in the order in which they appear in an English dictionary. 1. Petitionary 2. Petitioning 3. Petition 4. Petitioners 5. Petitioned",
    "options": [
      "1. 3, 1, 4, 5, 2",
      "2. 3, 1, 5, 4, 2",
      "3. 4, 1, 2, 3, 5",
      "4. 1, 2, 3, 4, 5"
    ],
    "correct_option": "2. 3, 1, 5, 4, 2",
    "explanation": "The correct answer is Option 2 i.e. 3, 1, 5, 4, 2. 3. Petition, 1. Petitionary, 5. Petitioned, 4. Petitioners, 2. Petitioning. [1]",
    "exam": "CGL - 11 April 2022 - Shift 1"
  },
  {
    "question_id": 92,
    "question": "Q:92 Select the correct option that indicates the arrangement of the given words in a logical and meaningful order. 1. Core 2. Atmosphere 3. Universe 4. Surface 5. Galaxy",
    "options": [
      "1. 1, 4, 2, 3, 5",
      "2. 1, 4, 2, 5, 3",
      "3. 4, 3, 5, 2, 1",
      "4. 1, 3, 4, 5, 2"
    ],
    "correct_option": "2. 1, 4, 2, 5, 3",
    "explanation": "The correct answer is Option 2 i.e. 1, 4, 2, 5, 3. 1. Core, 4. Surface, 2. Atmosphere, 5. Galaxy, 3. Universe. [1]",
    "exam": "CGL - 18 April 2022 - Shift 1"
  },
  {
    "question_id": 93,
    "question": "Q:93 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Proper 2. Pronoun 3. Proof 4. Prophecy 5. Propel",
    "options": [
      "1. 2, 3, 1, 5, 4",
      "2. 2, 3, 5, 1, 4",
      "3. 2, 1, 5, 3, 4",
      "4. 2, 1, 3, 5, 4"
    ],
    "correct_option": "2. 2, 3, 5, 1, 4",
    "explanation": "The correct answer is Option 2 i.e. 2, 3, 5, 1, 4. 2. Pronoun, 3. Proof, 5. Propel, 1. Proper, 4. Prophecy. [1]",
    "exam": "CHSL - 3 June 2022 - Shift 2"
  },
  {
    "question_id": 94,
    "question": "Q:94 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Prophet 2. Prudent 3. Producer 4. Quest 5. Puberty 6. Profound",
    "options": [
      "1. 3, 6, 1, 2, 5, 4",
      "2. 3, 6, 2, 1, 5, 4",
      "3. 3, 1, 6, 5, 2, 4",
      "4. 3, 6, 1, 2, 5, 4"
    ],
    "correct_option": "1. 3, 6, 1, 2, 5, 4",
    "explanation": "The correct answer is Option 1 i.e. 3, 6, 1, 2, 5, 4. 3. Producer, 6. Profound, 1. Prophet, 2. Prudent, 5. Puberty, 4. Quest. [1]",
    "exam": "CHSL - 2 June 2022 - Shift 3"
  },
  {
    "question_id": 95,
    "question": "Q:95 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Catalyst 2. Carrot 3. Calcium 4. Calculate 5. Calendar",
    "options": [
      "1. 4, 3, 5, 2, 1",
      "2. 4, 5, 3, 2, 1",
      "3. 3, 4, 5, 2, 1",
      "4. 3, 2, 1, 4, 5"
    ],
    "correct_option": "3. 3, 4, 5, 2, 1",
    "explanation": "The correct answer is Option 3 i.e. 3, 4, 5, 2, 1. 3. Calcium, 4. Calculate, 5. Calendar, 2. Carrot, 1. Catalyst. [1]",
    "exam": "CHSL - 2 June 2022 - Shift 2"
  },
  {
    "question_id": 96,
    "question": "Q:96 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Facsimile 2. Frightful 3. Favourable 4. Fructification 5. Fanatical",
    "options": [
      "1. 1, 4, 2, 5, 3",
      "2. 1, 3, 4, 2, 5",
      "3. 1, 5, 3, 2, 4",
      "4. 1, 3, 4, 5, 2"
    ],
    "correct_option": "3. 1, 5, 3, 2, 4",
    "explanation": "The correct answer is Option 3 i.e. 1, 5, 3, 2, 4. 1. Facsimile, 5. Fanatical, 3. Favourable, 2. Frightful, 4. Fructification. [1]",
    "exam": "CHSL - 2 June 2022 - Shift 1"
  },
  {
    "question_id": 97,
    "question": "Q:97 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Necessary 2. Networks 3. Negotiate 4. Needlework 5. Neigh",
    "options": [
      "1. 1, 4, 5, 3, 2",
      "2. 1, 4, 3, 5, 2",
      "3. 3, 4, 1, 5, 2",
      "4. 3, 1, 5, 4, 2"
    ],
    "correct_option": "1. 1, 4, 5, 3, 2",
    "explanation": "The correct answer is Option 1 i.e. 1, 4, 5, 3, 2. 1. Necessary, 4. Needlework, 5. Neigh, 3. Negotiate, 2. Networks. [1]",
    "exam": "CHSL - 2 June 2022 - Shift 1"
  },
  {
    "question_id": 98,
    "question": "Q:98 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Resolve 2. Rodent 3. Resonant 4. Return 5. Respond 6. Rigidity",
    "options": [
      "1. 1, 3, 5, 4, 2, 6",
      "2. 3, 1, 5, 4, 2, 6",
      "3. 1, 3, 5, 4, 6, 2",
      "4. 1, 3, 4, 5, 6, 2"
    ],
    "correct_option": "1. 1, 3, 5, 4, 2, 6",
    "explanation": "The correct answer is Option 1 i.e. 1, 3, 5, 4, 2, 6. 1. Resolve, 3. Resonant, 5. Respond, 4. Return, 2. Rodent, 6. Rigidity. [1]",
    "exam": "CHSL - 30 May 2022 - Shift 3"
  },
  {
    "question_id": 99,
    "question": "Q:99 Select the correct option that indicates the arrangement of the following words in a logical and meaningful order. 1. Solar System 2. Earth 3. India 4. Asia 5. Milky way",
    "options": [
      "1. 5, 1, 2, 4, 3",
      "2. 1, 2, 3, 4, 5",
      "3. 5, 4, 3, 2, 1",
      "4. 2, 1, 3, 4, 5"
    ],
    "correct_option": "1. 5, 1, 2, 4, 3",
    "explanation": "The correct answer is Option 1 i.e. 5, 1, 2, 4, 3. 5. Milky way, 1. Solar System, 2. Earth, 4. Asia, 3. India. [1]",
    "exam": "CHSL - 30 May 2022 - Shift 2"
  },
  {
    "question_id": 100,
    "question": "Q:100 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Campaigns 2. Catalytic 3. Candidature 4. Camphor 5. Cataracts",
    "options": [
      "1. 1, 3, 4, 2, 5",
      "2. 1, 2, 3, 4, 5",
      "3. 1, 4, 3, 5, 2",
      "4. 1, 5, 4, 3, 2"
    ],
    "correct_option": "3. 1, 4, 3, 5, 2",
    "explanation": "The correct answer is Option 3 i.e. 1, 4, 3, 5, 2. 1. Campaigns, 4. Camphor, 3. Candidature, 5. Cataracts, 2. Catalytic. [1]",
    "exam": "CHSL - 30 May 2022 - Shift 1"
  },
  {
    "question_id": 101,
    "question": "Q:101 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Projectile 2. Projector 3. Prolong 4. Prolific 5. Prohibit",
    "options": [
      "1. 1, 5, 4, 2, 3",
      "2. 5, 1, 2, 4, 3",
      "3. 1, 5, 2, 4, 3",
      "4. 5, 1, 4, 2, 3"
    ],
    "correct_option": "2. 5, 1, 2, 4, 3",
    "explanation": "The correct answer is Option 2 i.e. 5, 1, 2, 4, 3. 5. Prohibit, 1. Projectile, 2. Projector, 4. Prolific, 3. Prolong. [1]",
    "exam": "CHSL - 30 May 2022 - Shift 1"
  },
  {
    "question_id": 102,
    "question": "Q:102 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Sourced 2. Sorrow 3. Soulful 4. Soaking 5. Somewhere",
    "options": [
      "1. 5, 4, 3, 2, 1",
      "2. 4, 5, 2, 1, 3",
      "3. 5, 4, 1, 2, 3",
      "4. 4, 5, 3, 2, 1"
    ],
    "correct_option": "2. 4, 5, 2, 1, 3",
    "explanation": "The correct answer is Option 2 i.e. 4, 5, 2, 1, 3. 4. Soaking, 5. Somewhere, 2. Sorrow, 1. Sourced, 3. Soulful. [1]",
    "exam": "CHSL - 24 May 2022 - Shift 1"
  },
  {
    "question_id": 103,
    "question": "Q:103 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Potential 2. Posthumous 3. Postbox 4. Polymer 5. Popular",
    "options": [
      "1. 5, 4, 3, 2, 1",
      "2. 4, 5, 2, 3, 1",
      "3. 4, 5, 3, 2, 1",
      "4. 1, 2, 3, 4, 5"
    ],
    "correct_option": "3. 4, 5, 3, 2, 1",
    "explanation": "The correct answer is Option 3 i.e. 4, 5, 3, 2, 1. 4. Polymer, 5. Popular, 3. Postbox, 2. Posthumous, 1. Potential. [1]",
    "exam": "CHSL - 24 May 2022 - Shift 1"
  },
  {
    "question_id": 104,
    "question": "Q:104 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Knight 2. Kitchen 3. Kinship 4. Kinetic 5. Kind",
    "options": [
      "1. 5, 4, 3, 2, 1",
      "2. 2, 4, 1, 3, 5",
      "3. 4, 5, 3, 2, 1",
      "4. 4, 1, 2, 3, 5"
    ],
    "correct_option": "1. 5, 4, 3, 2, 1",
    "explanation": "The correct answer is Option 1 i.e. 5, 4, 3, 2, 1. 5. Kind, 4. Kinetic, 3. Kinship, 2. Kitchen, 1. Knight. [1]",
    "exam": "CHSL - 24 May 2022 - Shift 2"
  },
  {
    "question_id": 105,
    "question": "Q:105 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Handicap 2. Handler 3. Hallowed 4. Handout 5. Handle",
    "options": [
      "1. 3, 1, 2, 5, 4",
      "2. 3, 1, 5, 2, 4",
      "3. 3, 1, 2, 5, 4",
      "4. 1, 3, 5, 2, 4"
    ],
    "correct_option": "2. 3, 1, 5, 2, 4",
    "explanation": "The correct answer is Option 2 i.e. 3, 1, 5, 2, 4. 3. Hallowed, 1. Handicap, 5. Handle, 4. Handout, 2. Handler. [1]",
    "exam": "CHSL - 26 May 2022 - Shift 2"
  },
  {
    "question_id": 106,
    "question": "Q:106 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Curator 2. Culminate 3. Curriculum 4. Culinary 5. Cucumber",
    "options": [
      "1. 5, 4, 2, 1, 3",
      "2. 5, 4, 2, 3, 1",
      "3. 5, 2, 4, 1, 3",
      "4. 4, 1, 3, 5, 2"
    ],
    "correct_option": "1. 5, 4, 2, 1, 3",
    "explanation": "The correct answer is option 1 i.e. 5, 4, 2, 1, 3. The dictionary order is: 5. Cucumber, 4. Culinary, 2. Culminate, 1. Curator, 3. Curriculum.",
    "exam": "CHSL - 25 May 2022 - Shift 1"
  },
  {
    "question_id": 107,
    "question": "Q:107 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Sanitization 2. Sanctuary 3. Salvation 4. Salmon 5. Salesman",
    "options": [
      "1. 5, 4, 2, 1, 3",
      "2. 4, 3, 2, 1, 5",
      "3. 1, 2, 3, 4, 5",
      "4. 5, 4, 3, 2, 1"
    ],
    "correct_option": "4. 5, 4, 3, 2, 1",
    "explanation": "The correct answer is option 4 i.e. 5, 4, 3, 2, 1. The dictionary order is: 5. Salesman, 4. Salmon, 3. Salvation, 2. Sanctuary, 1. Sanitization.",
    "exam": "CHSL - 25 May 2022 - Shift 1"
  },
  {
    "question_id": 108,
    "question": "Q:108 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Vantage 2. Wherefore 3. Uplift 4. Various 5. Variety 6. Valor",
    "options": [
      "1. 3, 6, 1, 5, 4, 2",
      "2. 3, 1, 6, 4, 5, 2",
      "3. 3, 6, 1, 4, 5, 2",
      "4. 6, 3, 1, 5, 4, 2"
    ],
    "correct_option": "1. 3, 6, 1, 5, 4, 2",
    "explanation": "The correct answer is option 1 i.e. 3, 6, 1, 5, 4, 2. The dictionary order is: 3. Uplift, 6. Valor, 1. Vantage, 5. Variety, 4. Various, 2. Wherefore.",
    "exam": "CHSL - 25 May 2022 - Shift 3"
  },
  {
    "question_id": 109,
    "question": "Q:109 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Negotiation 2. Negate 3. Networking 4. Negligible 5. Newspaper",
    "options": [
      "1. 4, 2, 1, 3, 5",
      "2. 2, 4, 1, 3, 5",
      "3. 2, 1, 4, 3, 5",
      "4. 4, 1, 2, 3, 5"
    ],
    "correct_option": "2. 2, 4, 1, 3, 5",
    "explanation": "The correct answer is option 2 i.e. 2, 4, 1, 3, 5. The dictionary order is: 2. Negate, 4. Negligible, 1. Negotiation, 3. Networking, 5. Newspaper.",
    "exam": "CHSL - 24 May 2022 - Shift 2"
  },
  {
    "question_id": 110,
    "question": "Q:110 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Dish 2. Disease 3. Discuss 4. Disjoin 5. Disgrace",
    "options": [
      "1. 2, 3, 1, 5, 4",
      "2. 2, 3, 5, 1, 4",
      "3. 3, 2, 5, 1, 4",
      "4. 3, 2, 1, 5, 4"
    ],
    "correct_option": "3. 3, 2, 5, 1, 4",
    "explanation": "The correct answer is option 3 i.e. 3, 2, 5, 1, 4. The dictionary order is: 3. Discuss, 2. Disease, 5. Disgrace, 1. Dish, 4. Disjoin.",
    "exam": "CHSL - 24 May 2022 - Shift 2"
  },
  {
    "question_id": 111,
    "question": "Q:111 Select the option that represents the correct order of the given words as they would appear in an English dictionary. 1. Adequate 2. Adoption 3. Addiction 4. Abduction 5. Advertisement",
    "options": [
      "1. 4, 3, 1, 2, 5",
      "2. 3, 1, 4, 2, 5",
      "3. 2, 3, 4, 1, 5",
      "4. 4, 2, 1, 3, 5"
    ],
    "correct_option": "1. 4, 3, 1, 2, 5",
    "explanation": "The correct answer is option 1 i.e. 4, 3, 1, 2, 5. The dictionary order is: 4. Abduction, 3. Addiction, 1. Adequate, 2. Adoption, 5. Advertisement.",
    "exam": "CHSL - 24 May 2022 - Shift 3"
  },
  {
    "question_id": 112,
    "question": "Q:112 If in the number sequence 4 7 8 4 6 5 1 2 3 5 4 7, all the odd numbers are increased by one and all the even numbers are decreased by two, then the new number sequence is arranged in ascending order, which will be the eighth digit from the right?",
    "options": [
      "1. 2",
      "2. 8",
      "3. 4",
      "4. 6"
    ],
    "correct_option": "1. 2",
    "explanation": "The correct answer is Option 1 i.e. 2. Given sequence: 4 7 8 4 6 5 1 2 3 5 4 7. New series: 2 8 6 2 4 6 2 0 4 6 2 8. After arranging in ascending order: 0 2 2 2 2 4 4 6 6 6 8 8. The eighth digit from the right is 2.",
    "exam": "UP SI - 21 Nov 2021 - Shift 3"
  },
  {
    "question_id": 113,
    "question": "Q:113 If all the vowels are removed in the word COLLECTIVISATION, then the letters of the word are arranged alphabetically, which letter will be second to the left of the third letter from the right?",
    "options": [
      "1. S",
      "2. N",
      "3. L",
      "4. T"
    ],
    "correct_option": "2. N",
    "explanation": "The correct answer is Option 2 i.e. N. Given word: COLLECTIVISATION. New word after removing vowels: CLLCTVSTN. After arranging alphabetically: CCLLNSTTV. Third letter from the right = T. Second to the left of T = N.",
    "exam": "UP SI - 21 Nov 2021 - Shift 3"
  },
  {
    "question_id": 114,
    "question": "Q:114 How many even numbers are there in the sequence which are immediately preceded by an odd number? 1 2 3 6 7 8 4 3 2 5 7 6 4 9 7 2 5 7",
    "options": [
      "1. Six",
      "2. Five",
      "3. Four",
      "4. Three"
    ],
    "correct_option": "1. Six",
    "explanation": "The correct answer is Option 1 i.e. Six. The number of even numbers in the sequence which are immediately preceded by an odd number are six: (1 2), (3 6), (7 8), (3 2), (7 6), (7 2).",
    "exam": "UP SI - 21 Nov 2021 - Shift 3"
  },
  {
    "question_id": 115,
    "question": "Q:115 If every alternate letter starting from A of the English alphabet series is written in small letters, rest all are written in capital letters, how will the given word 'Frequent' be written?",
    "options": [
      "1. FrEquENt",
      "2. FREQUENT",
      "3. FrEQUeNt",
      "4. FrEquent"
    ],
    "correct_option": "1. FrEquENt",
    "explanation": "The correct answer is Option 1 i.e. FrEquENt. Given series format: a B c D e F g H i J k L m N o P q R s T u V w X y Z. Following this pattern, the word 'Frequent' will be written as FrEquENt.",
    "exam": "UP SI - 21 Nov 2021 - Shift 3"
  },
  {
    "question_id": 116,
    "question": "Q:116 If the first half of the English alphabet series is reversed, which of the following will be the twelfth to the right of the seventh letter from the left end?",
    "options": [
      "1. P",
      "2. O",
      "3. S",
      "4. N"
    ],
    "correct_option": "3. S",
    "explanation": "The correct answer is Option 3 i.e. S. New series: M L K J I H G F E D C B A N O P Q R S T U V W X Y Z. Seventh letter from the left end = G. Twelfth letter to the right of G = S.",
    "exam": "UP SI - 1 Dec 2021 - Shift 1"
  },
  {
    "question_id": 117,
    "question": "Q:117 If the order of the English alphabet series is reversed, then which letter will be the eighth letter to the right of S?",
    "options": [
      "1. K",
      "2. M",
      "3. N",
      "4. L"
    ],
    "correct_option": "1. K",
    "explanation": "The correct answer is Option 1 i.e. K. Reversed series: Z Y X W V U T S R Q P O N M L K J I H G F E D C B A. The eighth letter to the right of S is K.",
    "exam": "UP SI - 16 Nov 2021 - Shift 1"
  },
  {
    "question_id": 118,
    "question": "Q:118 If in the number sequence 4 5 6 8 1 3 3 4 5 6 8 8 1, all the odd numbers are increased by three and all the even numbers are decreased by three, then the number sequence are arranged in ascending order, which will be the fourth digit from the right?",
    "options": [
      "1. 6",
      "2. 8",
      "3. 5",
      "4. 3"
    ],
    "correct_option": "1. 6",
    "explanation": "The correct answer is Option 1 i.e. 6. Given sequence: 4 5 6 8 1 3 3 4 5 6 8 8 1. New sequence: 1 8 3 5 4 6 6 1 8 3 5 5 4. After arranging in ascending order: 1 1 3 3 4 4 5 5 5 6 6 8 8. The fourth digit from the right is 6.",
    "exam": "UP SI - 16 Nov 2021 - Shift 1"
  },
  {
    "question_id": 119,
    "question": "Q:119 How many such 7s are there in the following number sequence each of which is immediately preceded by 8 or 9 but not immediately followed by 2 or 5? 8 7 6 1 2 7 7 9 7 3 4 1 1 8 7 5 7 9 7 7 4 3 8 7 1 8 7 2",
    "options": [
      "1. Three",
      "2. Four",
      "3. Two",
      "4. Five"
    ],
    "correct_option": "2. Four",
    "explanation": "The correct answer is Option 2 i.e. Four. The number of 7s that are immediately preceded by 8 or 9 but not immediately followed by 2 or 5 is 4 in the sequence.",
    "exam": "UP SI - 16 Nov 2021 - Shift 1"
  },
  {
    "question_id": 120,
    "question": "Q:120 If every alternate letter starting from the left end of the word SNORKELING is written in capital letters, the rest all are written in small letters, the new word thus formed is reversed, which letter will be fourth to the left third from the right?",
    "options": [
      "1. K",
      "2. e",
      "3. n",
      "4. L"
    ],
    "correct_option": "4. L",
    "explanation": "The correct answer is Option 4 i.e. L. Given word: SNORKELING. New word: SnOrKeLiNg. Reversed word: gNiLeKrOnS. The third letter from right = O; Fourth to the left of the third letter from the right = L.",
    "exam": "UP SI - 17 Nov 2021 - Shift 1"
  },
  {
    "question_id": 121,
    "question": "Q:121 Suppose the first and the second letters of the word ADMINISTRATIVELY changed places, also the third and the fourth, the fifth and the sixth, and so on a new word, thus formed, which letter would be the 12th from the left?",
    "options": [
      "1. I",
      "2. T",
      "3. R",
      "4. A"
    ],
    "correct_option": "2. T",
    "explanation": "The correct answer is Option 2 i.e. T. Given word: ADMINISTRATIVELY. After rearranging the new word is: D A I M N T S A R I T E V Y L. The letter that is 12th from the left is T.",
    "exam": "UP SI - 17 Nov 2021 - Shift 1"
  },
  {
    "question_id": 122,
    "question": "Q:122 In the series given below, how many 9s are there each of which is exactly divisible by its immediate succeeding number? 6 9 6 3 9 9 3 6 9 6 3 9 6 9 3 9 6 9 3",
    "options": [
      "1. Two",
      "2. Four",
      "3. Five",
      "4. Three"
    ],
    "correct_option": "3. Five",
    "explanation": "The correct answer is Option 3 i.e. Five. The number 9 that is exactly divisible by its immediate succeeding number = Five. 6 9 6 3 9 9 3 6 9 6 3 9 6 9 3 9 6 9 3",
    "exam": "UP SI - 17 Nov 2021 - Shift 1"
  },
  {
    "question_id": 123,
    "question": "Q:123 If in the word CINDRELLA, all the consonants are replaced by the next letter in the alphabet and all the vowels are replaced by the previous letter then all the letters are arranged alphabetically, which will be the seventh letter from the right?",
    "options": [
      "1. M",
      "2. S",
      "3. H",
      "4. E"
    ],
    "correct_option": "4. E",
    "explanation": "The correct answer is Option 4 i.e. E. Word: CINDRELLA. New word = DDEHMOSZ. Reversed word = ZSOMHEDD. So, the letter that is the seventh from the right = E.",
    "exam": "UP SI - 13 Nov 2021 - Shift 2"
  },
  {
    "question_id": 124,
    "question": "Q:124 If the first half of the word RESTAURANT is reversed, which of the following will be the second to the right of the seventh letter from the left end?",
    "options": [
      "1. A",
      "2. N",
      "3. R",
      "4. T"
    ],
    "correct_option": "2. N",
    "explanation": "The correct answer is Option 2 i.e. N. Now first half of the word is RESTA is reversed. So, the word now is ATSERURANT. 7th letter from left end = R; Second to the right of R = N.",
    "exam": "UP SI - 13 Nov 2021 - Shift 2"
  },
  {
    "question_id": 125,
    "question": "Q:125 Which of the following options is exactly midway between F and P in a forward alphabet series?",
    "options": [
      "1. M",
      "2. J",
      "3. K",
      "4. N"
    ],
    "correct_option": "3. K",
    "explanation": "The correct answer is Option 3 i.e. K. Series: F, G, H, I, J, K, L, M, N, O, P. Total letters = 11; Mid letter = 6th = K.",
    "exam": "UP SI - 13 Nov 2021 - Shift 2"
  },
  {
    "question_id": 126,
    "question": "Q:126 How many such 6s are there in the following number sequence each of which is immediately preceded by 2 or 7 but not immediately followed by 5 or 4? 7 6 4 8 2 6 6 2 5 2 6 9 1 7 6 8 6 6 2 6 7 6 1 0",
    "options": [
      "1. Five",
      "2. Four",
      "3. Six",
      "4. Three"
    ],
    "correct_option": "1. Five",
    "explanation": "The correct answer is Option 1 i.e. Five. The sequence is: 7 6 4 8 2 6 6 2 5 2 6 9 1 7 6 8 6 6 2 6 7 6 1 0. Thus, the number that follows the above condition are 266, 269, 768, 267, and 761.",
    "exam": "UP SI - 13 Nov 2021 - Shift 2"
  },
  {
    "question_id": 127,
    "question": "Q:127 Select the combination of numbers so that letters arranged accordingly will form a meaningful word. 1: A, 2: H, 3: E, 4: B, 5: C",
    "options": [
      "1. 2, 3, 5, 4, 1",
      "2. 3, 4, 2, 1, 5",
      "3. 2, 1, 3, 5, 4",
      "4. 4, 3, 1, 5, 2"
    ],
    "correct_option": "4. 4, 3, 1, 5, 2",
    "explanation": "The correct answer is Option 4 i.e. 4, 3, 1, 5, 2. Meaning: an area of sand or small stones beside the sea. Word: BEACH.",
    "exam": "UP SI - 13 Nov 2021 - Shift 2"
  },
  {
    "question_id": 128,
    "question": "Q:128 Which letter is fourth to the right of the sixteenth letter from the right end of the English alphabet series?",
    "options": [
      "1. N",
      "2. P",
      "3. O",
      "4. M"
    ],
    "correct_option": "3. O",
    "explanation": "The correct answer is Option 3 i.e. O. Given series: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Sixteenth letter from the right end of the English alphabet series = K. Fourth to the right of K = O.",
    "exam": "UP SI - 25 Nov 2021 - Shift 3"
  },
  {
    "question_id": 129,
    "question": "Q:129 If every alternate letter starting from the left end of the word REPRODUCTION is written in capital letters, rest all are written in small letters, the new word thus formed will be reversed, which letter will be fifth to the left of the letter third from the right?",
    "options": [
      "1. C",
      "2. O",
      "3. D",
      "4. U"
    ],
    "correct_option": "1. C",
    "explanation": "The correct answer is Option 1 i.e. c. After changing according to the question: nOiTcUdOrPeR. So, the fifth to the left of the letter third from the right is c.",
    "exam": "UP SI - 25 Nov 2021 - Shift 3"
  },
  {
    "question_id": 130,
    "question": "Q:130 If in the word CONCLUSION, all the consonants are replaced by the next letter in the alphabet and all the vowels are replaced by the previous letter then alphabetically, which will be the seventh letter from the right?",
    "options": [
      "1. M",
      "2. H"
    ],
    "correct_option": "1. M",
    "explanation": "The correct answer is Option 1 i.e. M. Given word: CONCLUSION. New word: DNODMTTHNO. The seventh letter from the right = M.",
    "exam": "UP SI - 25 Nov 2021 - Shift 3"
  },
  {
    "question_id": 131,
    "question": "Q:131 How many such 3s are there in the following number sequence each of which is immediately preceded by 1 or 2 but not immediately followed by 6 or 8? 6 3 3 5 2 3 4 3 1 3 8 7 6 3 4 2 3 5 1 3 3 9 2 3 6",
    "options": [
      "1. Five",
      "2. Four",
      "3. Two",
      "4. Three"
    ],
    "correct_option": "4. Three",
    "explanation": "The correct answer is Option 4 i.e. Three. The number of 3s in the above sequence which is immediately preceded by 1 or 2 but not immediately followed by 6 or 8 = Three.",
    "exam": "UP SI - 25 Nov 2021 - Shift 3"
  },
  {
    "question_id": 132,
    "question": "Q:132 Select the combination of numbers so that letters arranged accordingly will form a meaningful word. 1: K, 2: C, 3: A, 4: R, 5: C",
    "options": [
      "1. 5, 4, 3, 2, 1",
      "2. 2, 5, 4, 1, 3",
      "3. 4, 2, 5, 1, 3",
      "4. 3, 2, 1, 4, 5"
    ],
    "correct_option": "1. 5, 4, 3, 2, 1",
    "explanation": "The correct answer is Option 1 i.e. 5, 4, 3, 2, 1. Given letters: 1:K, 2:C, 3:A, 4:R, 5:C. Option 1: 5, 4, 3, 2, 1 -> CRACK - This forms a meaningful word.",
    "exam": "UP SI - 25 Nov 2021 - Shift 3"
  },
  {
    "question_id": 133,
    "question": "Q:133 If all the vowels are removed in the English alphabet series, which letter will be the eighth to the right of the thirteenth letter from the left?",
    "options": [
      "1. W",
      "2. Y",
      "3. Z",
      "4. X"
    ],
    "correct_option": "3. Z",
    "explanation": "The correct answer is Option 3 i.e. Z. Given series: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. After removing the vowels the series is: B C D F G H J K L M N P Q R S T V W X Y Z. The thirteenth letter from the left = Q, Eighth letter to the right of Q = Z.",
    "exam": "UP SI - 27 Nov 2021 - Shift 2"
  },
  {
    "question_id": 134,
    "question": "Q:134 If in the number sequence 7 6 3 1 2 5 7 5 6 2 1 8, all the odd numbers are increased by two and all the even numbers are decreased by two, then arrange them in ascending order, which will be the sixth number from the right?",
    "options": [
      "1. 0",
      "2. 3",
      "3. 5",
      "4. 4"
    ],
    "correct_option": "3. 5",
    "explanation": "The correct answer is Option 3 i.e. 5. Given sequence: 7 6 3 1 2 5 7 5 6 2 1 8. New series: 9 4 5 3 0 7 9 7 4 0 3 6. Series: 0 0 3 3 4 4 5 6 7 7 9 9. Sixth number from right = 5.",
    "exam": "UP SI - 27 Nov 2021 - Shift 2"
  },
  {
    "question_id": 135,
    "question": "Q:135 How many such 3s are there in the following number sequence which are neither immediately preceded by 5 nor immediately followed by 9? 9 3 9 5 3 9 9 3 7 2 3 5 9 3 5 9 8 6 3 7",
    "options": [
      "1. Four",
      "2. Two",
      "3. Five",
      "4. Three"
    ],
    "correct_option": "4. Three",
    "explanation": "The correct answer is Option 4 i.e. Three. Given series: 9 3 9 5 3 9 9 3 7 2 3 5 9 3 5 9 8 6 3 7. The number of 3s in the number sequence is neither immediately preceded by 5 nor immediately followed by 9 = Three.",
    "exam": "UP SI - 27 Nov 2021 - Shift 2"
  },
  {
    "question_id": 136,
    "question": "Q:136 Rearrange the word in question and find the option most similar in meaning to the rearranged word. E M R P I T",
    "options": [
      "1. BAN",
      "2. LICENSE",
      "3. REFUSAL",
      "4. PROTEST"
    ],
    "correct_option": "2. LICENSE",
    "explanation": "The correct answer is Option 2 i.e. LICENSE. Given word: E M R P I T. After rearranging: PERMIT. Permit means a document that lets you do something.",
    "exam": "UP SI - 20 Nov 2021 - Shift 2"
  },
  {
    "question_id": 137,
    "question": "Q:137 How many odd numbers are there in the sequence which are immediately followed by an even number? 2 5 4 1 8 9 6 3 2 4 7 8 5 1 2 3 6 9 1 2 5 8 9 6",
    "options": [
      "1. Seven",
      "2. Ten",
      "3. Nine",
      "4. Eight"
    ],
    "correct_option": "2. Ten",
    "explanation": "The correct answer is Option 2 i.e. Ten. Given series: 2 5 4 1 8 9 6 3 2 4 7 8 5 1 2 3 6 9 1 2 5 8 9 6. The odd numbers immediately followed by an even number = Ten: 25, 18, 96, 32, 78, 51, 36, 91, 58, 96.",
    "exam": "UP SI - 20 Nov 2021 - Shift 2"
  },
  {
    "question_id": 138,
    "question": "Q:138 If in the number sequence, 8 3 2 1 6 2 4 3 7 1 7 2 all the odd numbers are increased by two and all the even numbers are decreased by two, then the new number sequence is arranged in ascending order, which will be the fifth number from the left?",
    "options": [
      "1. 2",
      "2. 5",
      "3. 4",
      "4. 3"
    ],
    "correct_option": "4. 3",
    "explanation": "The correct answer is Option 4 i.e. 3. Given series: 8 3 2 1 6 2 4 3 7 1 7 2. New series: 6 5 0 3 4 0 2 5 9 3 9 0. After rearranging the new series in ascending order: 0 0 0 2 3 3 4 5 5 6 9 9. So, the fifth number from the left = 3.",
    "exam": "UP SI - 20 Nov 2021 - Shift 2"
  },
  {
    "question_id": 139,
    "question": "Q:139 If the last twelve letters of the English alphabet series is reversed, which of the following will be the tenth to the left of the sixth letter from the right end?",
    "options": [
      "1. K",
      "2. N",
      "3. L",
      "4. Z"
    ],
    "correct_option": "1. K",
    "explanation": "The correct answer is Option 1 i.e. K. Given series: A B C D E F G H I J K L M N Z Y X W V U T S R Q P O. Sixth letter from the right end = T; Tenth letter to the left of 'T' = K.",
    "exam": "UP SI - 20 Nov 2021 - Shift 2"
  },
  {
    "question_id": 140,
    "question": "Q:140 If every alternate letter starting from the left end of the word REGISTRATION is written in small letters, the rest all are written in capital letters, the new word thus formed is reversed, which letter will be fourth to the right of the letter third from the left?",
    "options": [
      "1. A",
      "2. T",
      "3. s",
      "4. g"
    ],
    "correct_option": "2. T",
    "explanation": "The correct answer is Option 2 i.e. T. Given word: REGISTRATION. New word: rEgIsTrAtIoN. After reversing the word is: NoItArTsIgEr. Third letter from the left = I; Fourth to the right of 'I' = T.",
    "exam": "UP SI - 20 Nov 2021 - Shift 1"
  },
  {
    "question_id": 141,
    "question": "Q:141 If every alternate letter starting from the left end of the word BITTERNESS is written in small letters, the rest are written in capital letters, the new word thus formed is reversed, which letter will be fourth to the right of the letter third from the left?",
    "options": [
      "1. e",
      "2. E",
      "3. r",
      "4. T"
    ],
    "correct_option": "4. T",
    "explanation": "The correct answer is Option 4 i.e. T. Given word: BITTERNESS. New word: bItTeRnEsS. After reversing the new word: SsEnReTtIb. The fourth letter to the right of the letter third from the left = T.",
    "exam": "UP SI - 29 Nov 2021 - Shift 2"
  },
  {
    "question_id": 142,
    "question": "Q:142 If every alternate letter starting from the left end of the word VERNACULAR is written in capital letters, the rest are written in small letters, and the new word thus formed is reversed, which letter will be fifth to the left of the letter third from the right?",
    "options": [
      "1. I",
      "2. A",
      "3. R",
      "4. U"
    ],
    "correct_option": "1. I",
    "explanation": "The correct answer is Option 1 i.e. I. Given word: VERNACULAR. New word: VeRnAcUlAr. After reversing: rAlUcAnReV. Third letter from the right = R; Fifth letter to the left of R = I.",
    "exam": "UP SI - 29 Nov 2021 - Shift 2"
  },
  {
    "question_id": 143,
    "question": "Q:143 If all the vowels are removed in the English alphabet series, which letter will be the ninth to the left of the third letter from the right?",
    "options": [
      "1. N",
      "2. P",
      "3. Q",
      "4. M"
    ],
    "correct_option": "4. M",
    "explanation": "The correct answer is Option 4 i.e. M. Given series: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. New series: B C D F G H J K L M N P Q R S T V W X Y Z. Third letter from the right = X; Ninth letter to the left of X = M.",
    "exam": "UP SI - 29 Nov 2021 - Shift 2"
  },
  {
    "question_id": 144,
    "question": "Q:144 How many such 8s are there in the following number sequence each of which is immediately followed by 7 but not immediately preceded by 9? 9 8 7 2 7 1 8 7 5 3 8 7 6 8 4 9 8 2 7 9 8 7 5 4 8 7",
    "options": [
      "1. Four",
      "2. Five",
      "3. Two",
      "4. Three"
    ],
    "correct_option": "4. Three",
    "explanation": "The correct answer is Option 4 i.e. Three. The number of 8s that is immediately followed by 7 but not immediately preceded by 9 = Three. (1 8 7), (3 8 7), (4 8 7).",
    "exam": "UP SI - 29 Nov 2021 - Shift 2"
  },
  {
    "question_id": 145,
    "question": "Q:145 Which of the words CANNOT be formed by the letters of the word 'FLAMBOYANT'?",
    "options": [
      "1. Lamb",
      "2. Bout",
      "3. Moan",
      "4. Boat"
    ],
    "correct_option": "2. Bout",
    "explanation": "The correct answer is Option 2 i.e. Bout. Option 2: Bout => FLAMBOYANT => U is missing in the word.",
    "exam": "UP Const. - 27 Jan 2019 - Shift 1"
  },
  {
    "question_id": 146,
    "question": "Q:146 Which of the following words has its letters in alphabetical order?",
    "options": [
      "1. Shade",
      "2. Heart",
      "3. Billow",
      "4. Charge"
    ],
    "correct_option": "3. Billow",
    "explanation": "The correct answer is Option 3 i.e. Billow. Option 3: Billow - Letters are in alphabetical order.",
    "exam": "UP Const. - 27 Jan 2019 - Shift 1"
  },
  {
    "question_id": 147,
    "question": "Q:147 Which of the words CANNOT be formed by the letter of the word 'CARABINER'?",
    "options": [
      "1. Crab",
      "2. Nine",
      "3. Bare",
      "4. Rice"
    ],
    "correct_option": "2. Nine",
    "explanation": "The correct answer is Option 2 i.e. Nine. Crab, Bare, and Rice can be formed from the word. Only, nine cannot be formed as there are not two 'N' in the word CARABINER.",
    "exam": "UP Const. - 28 Jan 2019 - Shift 2"
  },
  {
    "question_id": 148,
    "question": "Q:148 Which of the following words does NOT have its vowels in an alphabetical order?",
    "options": [
      "1. Aerious",
      "2. Materious",
      "3. Imperious",
      "4. Facetious"
    ],
    "correct_option": "3. Imperious",
    "explanation": "The correct answer is Option 3 i.e. Imperious. Option 3: Imperious - All vowels are not arranged in an alphabetical order.",
    "exam": "UP Const. - 28 Jan 2019 - Shift 2"
  },
  {
    "question_id": 149,
    "question": "Q:149 Which of the following words can be formed from the letters: ydcinratoi",
    "options": [
      "1. Dictionary",
      "2. Directory",
      "3. Direction",
      "4. Doctrine"
    ],
    "correct_option": "1. Dictionary",
    "explanation": "The correct answer is Option 1 i.e. Dictionary. Given letters: ydcinratoi. So, the word that can be formed is DICTIONARY.",
    "exam": "UP Const. - 28 Jan 2019 - Shift 1"
  },
  {
    "question_id": 150,
    "question": "Q:150 Which of the following words does NOT have its letters in an alphabetical order?",
    "options": [
      "1. Blank",
      "2. Alloy",
      "3. Empty",
      "4. Begin"
    ],
    "correct_option": "1. Blank",
    "explanation": "The correct answer is Option 1 i.e. Blank. Option 1: Blank -> In this, the letters are not arranged alphabetically.",
    "exam": "UP Const. - 28 Jan 2019 - Shift 1"
  }
];
