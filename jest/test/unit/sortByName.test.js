const sorting = require("../../app");

describe("Books names test suit", () => {
    it("Books names should be sorted in ascending order", () => {
        expect(
            sorting.sortByName([
                "Гарри Поттер",
                "Властелин Колец",
                "Волшебник изумрудного города",
            ])
        ).toEqual([
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
        ]);
    });

  
    it("Books names should be sorted is empty", () => {
        expect(
            sorting.sortByName([
                "Герой должен быть один",
                "А зори здесь тихие",
                "Малыш и Карлсон",
                "Герой должен быть один"
            ])

        ).toEqual([
            "А зори здесь тихие",
            "Герой должен быть один",
            "Герой должен быть один",
            "Малыш и Карлсон"
        ]);
    });

});