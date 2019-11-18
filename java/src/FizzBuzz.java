import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.IntStream;

public class FizzBuzz {
    private final static int MAXIMUM = 100;

    public static void main(String[] args) {

        var rules = List.of(
                ruleFor(3, s -> s.concat("Fizz")),
                ruleFor(5, s -> s.concat("Buzz"))
        );

        // Apply rules and print the output to console
        IntStream.rangeClosed(1, MAXIMUM).forEach(n -> {
            String response = "";
            for (var rule : rules) {
                response = rule.apply(n, response);
            }
            System.out.println(response.isEmpty() ? n : response);
        });
    }

    private static BiFunction<Integer, String, String> ruleFor(int multipleOf, Function<String, String> processingRule) {
        return (var number, var previous) -> {
            if (number % multipleOf != 0) {
                return previous;
            }

            return processingRule.apply(previous);
        };
    }
}
