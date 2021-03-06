const exerciseNames = [
  {
    name: 'barbellBenchPress',
    displayName: '바벨 벤치 프레스',
    engName: 'barbell bench press',
    desc: '가장 많은 무게를 사용할 수 있는 상체 운동의 최고봉',
    bodyPart: '가슴',
  },
  {
    name: 'dumbbellBenchPress',
    displayName: '덤벨 벤치 프레스',
    engName: 'dumbbell bench press',
    desc: '바벨보다 가동범위를 늘려 더 큰 자극을 주고 싶다면',
    bodyPart: '가슴',
  },
  {
    name: 'smithMachineBenchPress',
    displayName: '스미스 머신 벤치 프레스',
    engName: 'smith machine bench press',
    desc: '균형을 잡는 대신 고중량을 치는 데 집중할 수 있는 운동',
    bodyPart: '가슴',
  },
  {
    name: 'dumbbellFlye',
    displayName: '덤벨플라이',
    engName: 'dumbbell flye',
    desc: '대흉근을 자극해 넓은 가슴을 만들어주는 운동',
    bodyPart: '가슴',
  },
  {
    name: 'cableCrossover',
    displayName: '케이블 크로스오버',
    engName: 'cable crossover',
    desc: '안쪽 근육을 자극하고 가슴 근육을 선명하게 만들어주는 운동',
    bodyPart: '가슴',
  },
  {
    name: 'dumbbellPullover',
    displayName: '덤벨 풀오버',
    engName: 'dumbbell pullover',
    desc: '가슴과 등을 함께 발달시키는 상체운동계의 스쿼트',
    bodyPart: '가슴',
  },
  {
    name: 'chestPress',
    displayName: '체스트 프레스',
    engName: 'chest press',
    desc: '벤치프레스가 어려운 초보자를 위한 운동 1',
    bodyPart: '가슴',
  },
  {
    name: 'pecDecFlye',
    displayName: '펙 덱 플라이',
    engName: 'pec dec flye',
    desc: '벤치프레스가 어려운 초보자를 위한 운동 2',
    bodyPart: '가슴',
  },
  {
    name: 'pushup',
    displayName: '푸쉬업',
    engName: 'pushup',
    desc: '상체와 코어를 균형있게 단련시키는 최고의 맨몸 운동',
    bodyPart: '가슴',
  },
  {
    name: 'militaryPress',
    displayName: '밀리터리 프레스',
    engName: 'military press',
    desc: '어깨운동을 딱 한 가지만 해야 한다면',
    bodyPart: '어깨',
  },
  {
    name: 'dumbbellShoulderPress',
    displayName: '덤벨 숄더 프레스',
    engName: 'dumbbell shoulder press',
    desc: '가장 정확하게 삼각근을 자극할 수 있는 운동',
    bodyPart: '어깨',
  },
  {
    name: 'frontRaise',
    displayName: '프론트 레이즈',
    engName: 'front raise',
    desc: '전면 삼각근의 디테일을 살려주는 운동',
    bodyPart: '어깨',
  },
  {
    name: 'lateralRaise',
    displayName: '레터럴 레이즈',
    engName: 'lateral raise',
    desc: '어깨가 넓어보이게 하는 측면 삼각근 운동',
    bodyPart: '어깨',
  },
  {
    name: 'bentOverLateralRaise',
    displayName: '벤트오버 레터럴 레이즈',
    engName: 'bent over lateral raise',
    desc: '어깨깡패가 되고 싶다면 거를 수 없는 후면어깨 운동',
    bodyPart: '어깨',
  },
  {
    name: 'facePull',
    displayName: '페이스 풀',
    engName: 'face pull',
    desc: '후면 삼각근을 자극해 어깨의 볼륨감을 키우는 운동',
    bodyPart: '어깨',
  },
  {
    name: 'barbellShrugs',
    displayName: '바벨 슈러그',
    engName: 'barbell shrugs',
    desc: '등한시해서는 안 되는 승모근 단련 운동 1',
    bodyPart: '어깨',
  },
  {
    name: 'upRightRow',
    displayName: '업라이트 로우',
    engName: 'upright row',
    desc: '등한시해서는 안 되는 승모근 단련 운동 2',
    bodyPart: '어깨',
  },
  {
    name: 'dumbbellCurl',
    displayName: '덤벨 컬',
    engName: 'dumbbell curl',
    desc: '이두 운동의 기본',
    bodyPart: '이두',
  },
  {
    name: 'inclineDumbbellCurl',
    displayName: '인클라인 덤벨 컬',
    engName: 'incline dumbbell curl',
    desc: '근육을 최대한 이완시켜 운동효과를 증폭시키자',
    bodyPart: '이두',
  },
  {
    name: 'hammerCurl',
    displayName: '해머 컬',
    engName: 'hammer curl',
    desc: '장두와 전완근을 함께 발달시키는 운동',
    bodyPart: '이두',
  },
  {
    name: 'cableCurl',
    displayName: '케이블 컬',
    engName: 'cable curl',
    desc: '지속적인 부하와 넓은 가동범위가 장점',
    bodyPart: '이두',
  },
  {
    name: 'concentrationCurl',
    displayName: '컨센트레이션 컬',
    engName: 'concentration curl',
    desc: '이두를 완전히 고립시키고 수행하는 집중 훈련',
    bodyPart: '이두',
  },
  {
    name: 'preacherCurl',
    displayName: '프리쳐 컬',
    engName: 'preacher curl',
    desc: '단두를 집중 공략하는 운동',
    bodyPart: '이두',
  },
  {
    name: 'closeGripBenchPress',
    displayName: '클로즈 그립 벤치 프레스',
    engName: 'close-grip bench press',
    desc: '삼두근 운동 중 가장 많은 중량을 다루는 운동',
    bodyPart: '삼두',
  },
  {
    name: 'cablePushDown',
    displayName: '케이블 푸쉬 다운',
    engName: 'cable tricep push down',
    desc: '초심자에게 추천하는 삼두 운동',
    bodyPart: '삼두',
  },
  {
    name: 'lyingTricepsExtension',
    displayName: '라잉 트라이셉스 익스텐션',
    engName: 'lying triceps extension',
    desc: '삼두근의 벌크 향상에 가장 효과적인 삼두운동의 꽃',
    bodyPart: '삼두',
  },
  {
    name: 'benchDip',
    displayName: '벤치 딥스',
    engName: 'bench dip',
    desc: '집에서도 할 수 있는 효과적인 삼두 운동 1',
    bodyPart: '삼두',
  },
  {
    name: 'diamondPushup',
    displayName: '다이아몬드 푸쉬업',
    engName: 'diamond pushup',
    desc: '집에서도 할 수 있는 효과적인 삼두 운동 2',
    bodyPart: '삼두',
  },
  {
    name: 'barbellRow',
    displayName: '바벨 로우',
    engName: 'barbell row',
    desc: '큰 가슴과 넓은 어깨를 만들어주는 등 운동',
    bodyPart: '등/후면부',
  },
  {
    name: 'dumbbellRow',
    displayName: '덤벨 로우',
    engName: 'barbell row',
    desc: '바벨에 비해 부담을 줄이고 가동범위는 자유롭게',
    bodyPart: '등/후면부',
  },
  {
    name: 'seatedRow',
    displayName: '시티드 로우',
    engName: 'seated row',
    desc: '가장 기본이 되는 등 운동',
    bodyPart: '등/후면부',
  },
  {
    name: 'pullUp',
    displayName: '풀업',
    engName: 'pull up',
    desc: '"운동을 두 가지만 한다면 풀업과 스쿼트를 해라"',
    bodyPart: '등/후면부',
  },
  {
    name: 'conventionalDeadlift',
    displayName: '컨벤셔널 데드리프트',
    engName: 'conventional deadlift',
    desc: '데드리프트의 근본',
    bodyPart: '등/후면부',
  },
  {
    name: 'romanianDeadlift',
    displayName: '루마니안 데드리프트',
    engName: 'romanian deadlift',
    desc: '한국에서 가장 대중적인 방식의 데드리프트',
    bodyPart: '등/후면부',
  },
  {
    name: 'sumoDeadlift',
    displayName: '스모 데드리프트',
    engName: 'sumo deadlift',
    desc: '가동범위를 줄여 고중량을 들 수 있는 변형 훈련법',
    bodyPart: '등/후면부',
  },
  {
    name: 'stiffLeggedDeadlift',
    displayName: '스티프 레그드 데드리프트',
    engName: 'stiff legged deadlift',
    desc: '햄스트링과 척추기립근에 집중하는 훈련법',
    bodyPart: '등/후면부',
  },
  {
    name: 'backSquat',
    displayName: '백 스쿼트',
    engName: 'back squat',
    desc: '가장 기본이 되는 스쿼트 자세',
    bodyPart: '하체',
  },
  {
    name: 'frontSquat',
    displayName: '프론트 스쿼트',
    engName: 'front squat',
    desc: '코어를 단련시키기 좋은 바리에이션',
    bodyPart: '하체',
  },
  {
    name: 'pistolSquat',
    displayName: '피스톨 스쿼트',
    engName: 'pistol squat',
    desc: '맨몸으로 할 수 있는 고난이도 하체운동',
    bodyPart: '하체',
  },
  {
    name: 'overheadSquat',
    displayName: '오버헤드 스쿼트',
    engName: 'overhead squat',
    desc: '전신의 밸런스와 유연성을 조화시킬 수 있는 운동',
    bodyPart: '하체',
  },
  {
    name: 'bulgarianSplitSquat',
    displayName: '불가리안 스플릿 스쿼트',
    engName: 'bulgarian split squat',
    desc: '중량 추가시 백 스쿼트도 대체하는 숨겨진 보석 같은 운동',
    bodyPart: '하체',
  },
  {
    name: 'hackSquat',
    displayName: '핵 스쿼트',
    engName: 'hack squat',
    desc: '허벅지에 많은 자극을 줄 수 있는 보조 운동',
    bodyPart: '하체',
  },
  {
    name: 'narrowSquat',
    displayName: '내로우 스쿼트',
    engName: 'narrow squat',
    desc: '허벅지 바깥쪽과 전면부를 강하게 만드는 운동',
    bodyPart: '하체',
  },
  {
    name: 'lunge',
    displayName: '런지',
    engName: 'lunge',
    desc: '스쿼트와 함께 하체 단련의 양대산맥을 이루는 운동법',
    bodyPart: '하체',
  },
  {
    name: 'legPress',
    displayName: '레그 프레스',
    engName: 'leg press',
    desc: '초보자도 부담없이 고중량으로 하체를 단련할 수 있는 운동',
    bodyPart: '하체',
  },
  {
    name: 'abRollout',
    displayName: '앱 롤아웃',
    engName: 'ab rollout',
    desc: '과학적으로 증명된 최고의 복근 운동',
    bodyPart: '복부/코어',
  },
  {
    name: 'hangingLegRaise',
    displayName: '행잉 레그 레이즈',
    engName: 'hanging leg raise',
    desc: '철봉만 있다면 집에서도 가능한 고강도 복근 운동',
    bodyPart: '복부/코어',
  },
  {
    name: 'bicycleManeuver',
    displayName: '바이시클 메뉴버',
    engName: 'bicycle maneuver',
    desc: '방법은 쉽지만 효과는 강력한 복직근/복사근 단련 운동',
    bodyPart: '복부/코어',
  },
  {
    name: 'deadBug',
    displayName: '데드 버그',
    engName: 'dead bug',
    desc: '골반과 자세를 교정하며 코어도 단련할 수 있는 운동',
    bodyPart: '복부/코어',
  },
  {
    name: 'plank',
    displayName: '플랭크',
    engName: 'plank',
    desc: '땅과 몸만 있으면 어디서나 가능한 코어 운동',
    bodyPart: '복부/코어',
  },
];

export default exerciseNames;
