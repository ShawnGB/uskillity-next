import DetailCardAtom from '../atoms/detailCardAtom';
import Row from '../layouts/Rowlayout';

export default function UspCards() {
  const usps = [
    {
      symbol: '🌱',
      title: 'Connect, Learn, Grow',
      decription:
        'Embrace a platform that goes beyond traditional e-learning. Connect with a community, learn through hands-on experiences, and grow both personally and professionally',
    },
    {
      symbol: '🤝',
      title: 'Real Connections, Real Learning',
      decription:
        'Experience the power of offline courses that prioritize personal interactions. Forge connections with instructors and fellow learners, creating a genuine and lasting learning environment',
    },
    {
      symbol: '🌐',
      title: 'Your Skills, Your Community:',
      decription:
        "Join u/skillity to showcase your unique skills and be part of a community that celebrates individuality. Whether you're an instructor or a learner, u/skillity is where your skills find a home",
    },
  ];

  return (
    <Row>
      {usps.map((usp, index) => (
        <DetailCardAtom key={index}>
          <div className='p-4 flex flex-col items-center gap-4'>
            <h1 className='text-4xl'>{usp.symbol}</h1>
            <h3 className='text-xl font-bold'>{usp.title}</h3>
            <p className='text-justify leading-normal w-4/5'>
              {usp.decription}
            </p>
          </div>
        </DetailCardAtom>
      ))}
    </Row>
  );
}
