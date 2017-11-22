package org.jianzhao.java;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

import java.util.function.Function;
import java.util.stream.Stream;

/**
 * @author cbdyzj
 */
@Slf4j
public class LambdaTest {

    @Test
    public void test() {

        Function<Integer, Integer> plus1 = a -> a + 1;
        Function<Integer, Integer> mult2 = a -> a * 2;

        Function<Stream<Function<Integer, Integer>>, Function<Integer, Integer>>
                pipline = funcs -> val -> funcs.reduce((a, b) -> b.compose(a)).get().apply(val);

        Function<Integer, Integer> addThenMult = pipline.apply(Stream.of(plus1, mult2));

        Integer r = addThenMult.apply(5);

        log.info(r.toString());
    }

}
