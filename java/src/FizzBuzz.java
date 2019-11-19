import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.IntStream;

public class FizzBuzz {
    private final static int MAXIMUM = 100;

    public static void main(String[] args) {

        var rules = List.of(
                ruleFor(3, sb -> sb.append("Fizz")),
                ruleFor(5, sb -> sb.append("Buzz"))
        );

        // Apply rules and print the output to console
        IntStream.rangeClosed(1, MAXIMUM).forEach(n -> {
            StringBuilder response = new StringBuilder();
            for (var rule : rules) {
                response = rule.apply(n, response);
            }
            System.out.println(response.toString().isEmpty() ? n : response.toString());
        });
    }

    private static BiFunction<Integer, StringBuilder, StringBuilder> ruleFor(
            int multipleOf,
            Function<StringBuilder, StringBuilder> processingRule) {
        return (var number, var previous) -> {
            if (number % multipleOf != 0) {
                return previous;
            }

            return processingRule.apply(previous);
        };
    }
}
