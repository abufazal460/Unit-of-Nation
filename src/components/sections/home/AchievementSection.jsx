import React from 'react';
import { statistics } from '../../../data/statistics';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Icon from '../../common/Icon';

// import img1 from "../../../assets/works/work 1.jpeg"

export function AchievementSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <Container>
        <SectionTitle
          subtitle="TANGIBLE IMPACT"
          title="Key Achievements"
          description="Evidence of our commitment to defending innocence and spreading legal literacy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <Card key={stat.id} className="text-center p-6 sm:p-8 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2A9D8F]/10 text-[#2A9D8F] border border-[#2A9D8F] flex items-center justify-center font-bold mx-auto">
                <Icon name={stat.icon} className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900">
                {stat.targetNumber.toLocaleString()}{stat.suffix}
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">{stat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body">{stat.description}</p>
            </Card>
          ))}
        </div>
      </Container>
      {/* <div className='pt-12 px-5 xl:px-38'> */}
        {/* <img src={img1} alt="" /> */}
      {/* </div> */}
    </section>
  );
}

export default AchievementSection;
