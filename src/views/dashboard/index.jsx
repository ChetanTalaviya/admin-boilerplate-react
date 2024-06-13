import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import Cards from 'shared/components/Card'
import { faUserDoctor, faUser, faUserSlash, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import Wrapper from 'shared/components/Wrap'
import { useQuery } from 'react-query'
import { getDashboard } from 'query/dashboard/dashboard.query'
 
function Dashboard () {
  const [statsData, setStatsData] = useState({})
 
  const type = localStorage.getItem('type')

  // super admin statistics
  useQuery('Dashboard', () => getDashboard(), {
    select: (data) => data.data.data,
    onSuccess: (response) => {
      setStatsData(response)
    },
    onError: () => {
      setStatsData({})
    }
  })

 

  useEffect(() => {
    document.title = 'Dashboard'
  }, [])

  return (
    <div>
      {false ? (
        <div className='d-flex align-items-center justify-content-center'>
          <Spinner animation='border' variant='success' />
        </div>
      ) : (
        <>
          <Row>
              <>
                <Col xxl={6} xl={6} lg={6} className='active-user'>
                  <Wrapper>
                    <h3>activeUsers</h3>
                    <Row>
                      <Col xxl={6} xl={12} lg={12} sm={6} className='card-box' >
                        <div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                          <Cards cardtitle='Total ' cardtext={statsData?.totalActive || '0'} cardIcon={faUserDoctor} className={'dashboard-card-icon-3'} />
                        </div>
                      </Col>
                      <Col xxl={6} xl={12} lg={12} sm={6} className='card-box' >
                        <div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                          <Cards cardtitle='Total Patient' cardtext={statsData?.totalPatients || '0'} cardIcon={faUser} className={'dashboard-card-icon-4'} />
                        </div>
                      </Col>
                    </Row>
                  </Wrapper>
                </Col>

                <Col xxl={6} xl={6} lg={6} className='active-user mt-lg-0 mt-3'>
                  <Wrapper>
                    <h3>doctorAccounts</h3>
                    <Row>
                      <Col xxl={6} xl={12} lg={12} sm={6} className='card-box' >
                        <div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                          <Cards cardtitle='New Added' cardtext={statsData?.totalCurrentMonthDoctor || '0'} cardIcon={faUserPlus} className={'dashboard-card-icon-3'} />
                        </div>
                      </Col>
                      <Col xxl={6} xl={12} lg={12} sm={6} className='card-box' >
                        <div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                          <Cards cardtitle='Going to expire' cardtext={statsData?.totalExpireMonthDoctor || '0'} cardIcon={faUserMinus} className={'dashboard-card-icon-6'} />
                        </div>
                      </Col>
                    </Row>
                  </Wrapper>
                </Col>
              </> 
          </Row>
        </>
      )}
    </div>
  )
}

export default Dashboard
