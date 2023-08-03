let TypeOfPacage = "express"

switch (TypeOfPacage) {
    case "standard":
        console.log(
            "Your pacage will be deliverd in next 3-5 days."
        );
        break;

    case "express":
        console.log(
            "Your pacage will be deliverd in next 1-2 days."
        );
        break;
        
    case "overnight":
         console.log("Your pacage will be deliverd by tomorrow.");
            
break
    default:
        console.log("Invalid pacage type");
        break;
}